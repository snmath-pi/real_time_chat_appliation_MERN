import bcrypt from "bcryptjs";
import User from "../Models/user.model.js";
import generateTokenandSetCookie from "../utils/generatetoken.js";

export const signup = async (req, res)=> {
    try {
        const {fullname, username, password, confirmPassword, gender} = req.body; 


        if(password !== confirmPassword) {
            return res.status(400).json({error: "passwords do not match"})
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "user already exists"});
        }

        // hash password here
        
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender==='male' ? boyProfilePic : girlProfilePic,
        });

        if(newUser) {
            // generate JWT TOKEN
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({error: "invalid user data"});
        }

        

    } catch(error) {
        console.log("error is signup controller", error.message);
        res.status(500).json({error:"internal server error"})
    }
};




export const login =  async (req, res)=> {

    try {
		const { username, password } = req.body;
        console.log(password)
		const user = await User.findOne({ username });
		if (!user) {
            return res.status(400).json({ error: "Invalid Username" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "")        
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Password" });
        }

		generateTokenandSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullname: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};


export const logout = (req, res)=> {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "Logged out successfully"});
    }catch(error) {
        console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
};

import jwt from 'jsonwebtoken'


const generateTokenandSetCookie = (userId, res)=> {
    const token =  jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d' // iski expiry dekh lena
    })

    res.cookie("jwt", token, {

        maxAge: 15 * 24 * 60 * 60 * 1000, // should be in milliseconds 
        httpOnly: true, // to prevent XSS attacks [cross site scripting attacks]
        sameSite: "strict", // csrf attacks cross-site forgery attacks
        secure: process.env.NODE_ENV !== "development"

    })
}

export default generateTokenandSetCookie;
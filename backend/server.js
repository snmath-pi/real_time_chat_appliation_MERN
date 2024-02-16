import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connecttoMongoDB from './db/connectToMongodb.js';
import cookieParser from 'cookie-parser';

const app = express();


const PORT = process.env.PORT || 5000;

dotenv.config(); // to run this port at 8000


app.get("/", (req, res)=>{
    // root route http://localhost:5000/
    res.send('hello world!!')
})

// middleware
app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


app.listen(PORT, ()=> {
    connecttoMongoDB();
    console.log(`Server is running on port ${PORT}`);
});
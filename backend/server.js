import express from 'express'
import dotenv from 'dotenv'
const app = express();
import authRoutes from './routes/auth.routes.js'

dotenv.config(); // to run this port at 8000
const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    // root route http://localhost:5000/
    res.send('hello world!!')
})


app.use("/api/auth", authRoutes)
app.listen(PORT, ()=> console.log(`Server is running ${PORT}`));
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./utils/db.js"
import user from "./routes/userRoute.js";

dotenv.config({});

const app = express();

app.get('/',(req,res)=>{
    return res.status(200).json({
        message : "This Bakcend for first part",
        success : true,
    })
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", user);

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDb from "./utils/db.js"
import user from "./routes/userRoute.js";
import company from "./routes/companyRoute.js"
import job from "./routes/jobRoute.js"
import aplication from "./routes/aplicationRoute.js"

dotenv.config({});

const app = express();

app.get('/',(req,res)=>{
    return res.status(200).json({
        message : "This Bakcend for first part",
        success : true,
    })
})

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", user);
app.use('/api/company',company);
app.use("/api/job",job);
app.use("/api/aplication",aplication)

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
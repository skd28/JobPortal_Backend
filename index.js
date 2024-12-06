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

// const corsOptions = {
//     origin:'http://localhost:5173',
//     credentials:true
// }
// app.use(cors(corsOptions));

const allowedOrigins = [
    'http://localhost:5173',
    'https://job-backend-beryl.vercel.app', // Add your additional link here
   
];

const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or curl)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

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
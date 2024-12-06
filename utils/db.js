import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const connectDb = async () =>{
    try {
       // console.log("Link ",process.env.MONGODB_URL)
         await mongoose.connect(process.env.MONGODB_URL)
         console.log('Mongodb Connected ');
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;



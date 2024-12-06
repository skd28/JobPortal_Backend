import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const connectDb = async () =>{
    try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log('Mongodb Connected ');
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;


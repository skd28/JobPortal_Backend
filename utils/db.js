import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config({}); 

const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGODB_URL;
        //console.log("Link :",mongoUri)
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected `);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);  // Exit process with failure
    }
};

export default connectDb;



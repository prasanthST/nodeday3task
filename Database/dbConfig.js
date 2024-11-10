import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () =>{
    try {
        const connectionDB = await mongoose.connect(process.env.mongoDBConnectionString)
        console.log("mongoose connected ");
        return connectionDB
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB
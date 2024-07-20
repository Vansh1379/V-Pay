import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

export const ConnectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
        return connection;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

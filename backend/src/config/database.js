import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../../.env")
});

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

const connectToDB = async () =>{
    const mongoUri = process.env.MONGO_URI;
    
    if(!mongoUri){
        throw new Error('Mongo URI is not defined in env');
    }

    try{
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected successfully");
    } catch(err){
        console.error("MongoDB connection failed", err);
        throw err;
    }
};

export default connectToDB;
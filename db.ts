import mongoose from "mongoose"
import { config } from './config/config';

const connectDB =async () => {
   await mongoose.connect(config.databaseUrl as string)
    
}

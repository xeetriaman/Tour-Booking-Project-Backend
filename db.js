import mongoose from "mongoose";
import { seedTours } from "./seed/seedTours.js";

let connecting = null;

// Reuses one connection across serverless invocations
export const connectDB = async () => {
    if (mongoose.connection.readyState === 1) return;
    if (!connecting) {
        const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
        connecting = mongoose
            .connect(uri, { dbName: process.env.DB_NAME || "tour-booking" })
            .then(seedTours)
            .catch((err) => {
                connecting = null;
                throw err;
            });
    }
    await connecting;
};

import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { connectDB } from './db.js'
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}
app.get("/", (req, res) => {
    res.send("App is working");
});

app.use(cors(corsOptions));
// Connect (or reuse the connection) before handling API requests
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.log('MongoDB connection failure:', err);
        res.status(503).json({ success: false, message: 'Database unavailable' });
    }
});
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/tours',tourRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/booking',bookingRoute)
// Local development: start a server. On Vercel the exported app is used instead.
if (!process.env.VERCEL) {
    app.listen(port, () => {
        console.log('server listening on port', port);
    });
}

export default app;

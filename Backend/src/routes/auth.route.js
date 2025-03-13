import express from 'express';


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies


app.use("/api/auth", authRoutes);



const router = express.Router();


export default router;
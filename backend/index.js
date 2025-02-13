import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./router/auth.router.js";

dotenv.config();  

const app = express();
const port =process.env.PORT || 5000

app.use(express.json()); // allow us to parse incoming requests:req.body
app.use(cookieParser()); // allow us to parse incoming cookie

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    connectDB();
console.log("Server is running on port ", port)
}) ;

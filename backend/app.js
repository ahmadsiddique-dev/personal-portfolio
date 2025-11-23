import express from "express";
import cors from "cors"
import "dotenv/config"
import cookieParser from "cookie-parser";
import router from "./src/routes/user.routes.js"

const app = express();
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,               
}));
app.use(cookieParser())


app.use("/api/v1", router)
export default app;
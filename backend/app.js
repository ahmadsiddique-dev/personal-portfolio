import express from "express";
import cors from "cors"
import "dotenv/config"

const app = express();
app.use(express.json())
app.use(cors({
  origin: "*",
  // methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,               
}));
app.use(cookieParser())

import router from "./src/routes/user.routes.js"
import cookieParser from "cookie-parser";

app.use("/api/v1", router)
export default app;
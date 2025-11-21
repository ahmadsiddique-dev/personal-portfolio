import express from "express";
import cors from "cors"
import "dotenv/config"

const app = express();
app.use(express.json())
app.use(cors())

import router from "./src/routes/user.routes.js"

app.use("/api/v1", router)
export default app;
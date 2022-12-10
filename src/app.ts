import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!, () => {
  console.log("Connected to MongoDB Database");
});
const app = express()

app.use(express.json())
app.use(logger("dev"))
app.use(cookieParser())



const port = 4000
app.listen(port, ()=>{
  console.log(`Server is running on port:${port}`)
})

export default app
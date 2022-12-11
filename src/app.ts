import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";
import db from "./config/database.config";
// import autoIncrement from 'mongoose-auto-increment'
// import mongoose from "mongoose";

db.sync().then(() => {
  console.log('Database connected successfully')
}).catch(err => {
  console.log(err)
})

dotenv.config();

// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL!, () => {
//   console.log("Connected to MongoDB Database");
// });
// autoIncrement.initialize(mongoose.connection)


const app = express();
// export let initializedAutoIncrement = autoIncrement
// autoIncrement.plugin
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());

app.use("/", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});



export default app;

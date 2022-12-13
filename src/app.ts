import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";
import db from "./config/database.config";

db.sync()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

dotenv.config();

const app = express();
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());

app.use("/", userRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

export default app;

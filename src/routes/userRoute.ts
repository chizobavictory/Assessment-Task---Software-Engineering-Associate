import { createUser } from "../controller/userController";
import express from "express";
// import auth from "../middleware/auth";

const router = express.Router();

router.post("/user",createUser);

export default router;

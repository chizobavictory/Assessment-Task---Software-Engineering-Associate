import { createUser } from "../controller/userController";
import express from "express";


const router = express.Router();

router.post("/user", createUser);

export default router;

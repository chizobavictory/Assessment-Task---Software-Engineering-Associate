import { createUser, getAllUsers } from "../controller/userController";
import express from "express";
// import auth from "../middleware/auth";

const router = express.Router();

router.post("/user",createUser);
router.get("/user",getAllUsers);

export default router;

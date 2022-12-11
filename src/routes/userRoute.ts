import { createUser, getAllUsers, getUserById, login, updateUserById } from "../controller/userController";
import express from "express";
import { auth } from "../middleware/auth";
// import auth from "../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.post("/users", auth, createUser);
router.get("/users", auth, getAllUsers);
router.get("/users/:id", auth, getUserById);
router.put("/users/:id", auth, updateUserById);

export default router;

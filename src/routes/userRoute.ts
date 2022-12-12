import { createUser, deleteUsers, getAllUsers, getUserById, login, updateUsers } from "../controller/userController";
import express from "express";
import { auth } from "../middleware/auth";
// import auth from "../middleware/auth";

const router = express.Router();

router.post("/login", login);
router.post("/users", auth, createUser);
router.get("/users", auth, getAllUsers);
router.get("/users/:id", auth, getUserById);
router.put("/users/:id", auth, updateUsers);
router.delete("/users/:id", auth, deleteUsers);

export default router;

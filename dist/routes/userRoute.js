"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
// import auth from "../middleware/auth";
const router = express_1.default.Router();
router.post("/login", userController_1.login);
router.post("/users", auth_1.auth, userController_1.createUser);
router.get("/users", auth_1.auth, userController_1.getAllUsers);
router.get("/users/:id", auth_1.auth, userController_1.getUserById);
router.put("/users/:id", auth_1.auth, userController_1.updateUserById);
router.delete("/users/:id", auth_1.auth, userController_1.deleteUserById);
exports.default = router;

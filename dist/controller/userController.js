"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = __importDefault(require("../model/User"));
//create user
const createUser = async (req, res) => {
    const { firstname, lastname, gender, date_of_birth } = req.body;
    const user = await User_1.default.create({ firstname, lastname, gender, date_of_birth });
    res.status(201).json(user);
};
exports.createUser = createUser;

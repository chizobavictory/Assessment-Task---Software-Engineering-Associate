"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = __importDefault(require("../model/User"));
//create user
const createUser = async (req, res) => {
    // const { firstname, lastname, gender, date_of_birth } = req.body
    // const user = await User.create({ firstname, lastname, gender, date_of_birth })
    const newUser = new User_1.default({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
exports.createUser = createUser;

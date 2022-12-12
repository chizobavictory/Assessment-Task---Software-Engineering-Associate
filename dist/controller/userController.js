"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getAllUsers = exports.login = exports.createUser = void 0;
const base_64_1 = __importDefault(require("base-64"));
const User_1 = __importDefault(require("../model/User"));
//create user
const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { firstname, lastname, gender, date_of_birth } = req.body;
        const user = await User_1.default.create({ firstname, lastname, gender, date_of_birth });
        res.status(201).json(user);
    }
    catch (err) {
        // console.log(err)
        res.status(500).json(err);
    }
};
exports.createUser = createUser;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username === "test" && password === "pass1234") {
            const token = base_64_1.default.encode(`${username}:${password}`);
            return res.status(200).json({
                message: "Token generated",
                token,
            });
        }
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
};
exports.login = login;
//getall users
const getAllUsers = async (req, res) => {
    try {
        const users = await User_1.default.findAll();
        res.status(200).json(users);
    }
    catch (err) {
        // console.log(err)
        res.status(500).json(err);
    }
};
exports.getAllUsers = getAllUsers;
//get a user 
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User_1.default.findOne({
            where: {
                id,
            },
        });
        res.status(200).json(user);
    }
    catch (err) {
        // console.log(err)
        res.status(500).json(err);
    }
};
exports.getUserById = getUserById;
//update user 
const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, gender, date_of_birth } = req.body;
        const user = await User_1.default.update({ firstname }, { where: { id } });
        res.status(200).json(user);
    }
    catch (err) {
        // console.log(err)
        res.status(500).json(err);
    }
};
exports.updateUserById = updateUserById;
//delete user
const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User_1.default.destroy({ where: { id } });
        res.status(200).json(user);
    }
    catch (err) {
        // console.log(err)
        res.status(500).json(err);
    }
};
exports.deleteUserById = deleteUserById;

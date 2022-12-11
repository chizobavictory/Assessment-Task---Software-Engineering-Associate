"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose, { Schema } from "mongoose";
// import { initializedAutoIncrement } from "../app";
// import autoIncrement from "mongoose-auto-increment";
// import initializedAutoIncrement from "../app";
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const database_config_1 = __importDefault(require("../config/database.config"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_2.default.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: "user",
});
exports.default = User;

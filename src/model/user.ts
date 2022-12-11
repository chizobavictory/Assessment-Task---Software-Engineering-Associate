// import mongoose, { Schema } from "mongoose";
// import { initializedAutoIncrement } from "../app";
// import autoIncrement from "mongoose-auto-increment";
// import initializedAutoIncrement from "../app";
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "sequelize";
import db from "../config/database.config";

interface UserAttributes {
  id?: string;
  firstname: string;
  lastname: string;
  gender: string;
  date_of_birth: string;
}

class User extends Model<UserAttributes> {}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "user",
  }
);

export default User;

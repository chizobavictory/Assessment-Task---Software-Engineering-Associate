// import mongoose, { Schema } from "mongoose";
// import { initializedAutoIncrement } from "../app";
// import autoIncrement from "mongoose-auto-increment";
// import initializedAutoIncrement from "../app";
import {DataTypes, Model, Sequelize} from "sequelize";
import sequelize from "sequelize";
import db from "../config/database.config";

interface UserAttributes {
  id?: string;
  firstname: string;
  lastname: string;
  gender: string;
  date_of_birth: string;
}

class User extends Model <UserAttributes> {}


User.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
firstname:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  lastname:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  gender:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  date_of_birth:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  
}, {
  sequelize:db,
  tableName: "user"
});



// const userSchema = new Schema(
//   {
//     firstname: { type: String },
//     lastname: { type: String },
//     gender: { type: String },
//     date_of_birth: { type: String },
//   },
//   { timestamps: true }
// );

// userSchema.plugin(initializedAutoIncrement.plugin, { model: 'User' });

// const User = mongoose.model<User>("User", userSchema);


export default User;
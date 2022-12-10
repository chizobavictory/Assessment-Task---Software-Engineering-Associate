import mongoose, { Schema } from "mongoose";

interface UserInstance {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: number;
  password: string;
}

const userSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String},
    gender: { type: Number },
    date_of_birth: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model<UserInstance>("User", userSchema);

export default User;

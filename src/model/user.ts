import mongoose, { Schema } from "mongoose";

interface UserInstance {
  id: string;
  firstname: string;
  lastname: string;
  gender: string;
  date_of_birth: string;
}

const userSchema = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String },
    date_of_birth: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model<UserInstance>("User", userSchema);

export default User;

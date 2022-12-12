import base64 from "base-64";
import { Request, Response } from "express";
import User from "../model/User";

//create user
export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { firstname, lastname, gender, date_of_birth } = req.body;
    const user = await User.create({ firstname, lastname, gender, date_of_birth });
    res.status(201).json(user);
  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (username === "test" && password === "pass1234") {
      const token = base64.encode(`${username}:${password}`);
      return res.status(200).json({
        message: "Token generated",
        token,
      });
    }
    return res.status(401).json({
      message: "Unauthorized",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

//getall users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
};

//get a user 
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
};

//update user 
export const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, gender, date_of_birth } = req.body;
    const user = await User.update({ firstname }, { where: { id } });
    res.status(200).json(user);
  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
};

//delete user
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });
    res.status(200).json(user)

  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
}



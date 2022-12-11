import { Request, Response } from 'express'
import User from '../model/User'


//create user
export const createUser = async (req: Request, res: Response) => {
  // const { firstname, lastname, gender, date_of_birth } = req.body
  // const user = await User.create({ firstname, lastname, gender, date_of_birth })
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender: req.body.gender,
    date_of_birth: req.body.date_of_birth,
  })
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
} 


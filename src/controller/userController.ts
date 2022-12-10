import { Request, Response } from 'express'
import User from '../model/User'


//create user
export const createUser = async (req: Request, res: Response) => {
  const { firstname, lastname, gender, date_of_birth } = req.body
  const user = await User.create({ firstname, lastname, gender, date_of_birth })
  res.status(201).json(user)
} 


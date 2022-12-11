import { Request, Response } from 'express'
import User from '../model/User'




//create user
export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const { firstname, lastname, gender, date_of_birth } = req.body
    const user = await User.create({ firstname, lastname, gender, date_of_birth })
    res.status(201).json(user);
  } catch (err) {
    // console.log(err)
    res.status(500).json(err);
  }
} 


//getall users
export const getAllUsers = async (req: Request, res: Response) => {
  try{
  const users = await User.findAll()
  res.status(200).json(users)
}catch(err){
  console.log(err)
  res.status(500).json(err) 
}
}

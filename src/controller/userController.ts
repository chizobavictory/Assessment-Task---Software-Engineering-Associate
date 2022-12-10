import { Request, Response } from 'express'


//create user
export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  const user = await User.create({ name, email, password })
  res.status(201).json(user)
} 


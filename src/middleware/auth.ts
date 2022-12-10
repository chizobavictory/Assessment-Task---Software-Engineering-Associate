import base64 from 'base-64';
import { Request, Response, NextFunction } from 'express';


export default function auth(req: Request, res: Response, next: NextFunction){
  const authHeader = req.headers.authorization || ''
  const [username, password] = base64.decode(authHeader.split(' ')[1]).split(':')
  if(username === 'admin' && password === 'admin'){
    next()
}

res.set('WWW-Authenticate', 'Basic realm="user"')
res.status(401).send('Authentication required')
}



  



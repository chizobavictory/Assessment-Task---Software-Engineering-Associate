import base64 from "base-64";
import { Request, Response, NextFunction } from "express";

export function auth(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization || "";
    // console.log(authHeader);
    const [username, password] = base64.decode(authHeader.split(" ")[1]).split(":");
    if (username === "test" && password === "pass1234") {
      next();
    }
  } catch (err) {
    res.set("WWW-Authenticate", 'Basic realm="user"');
    res.status(401).send("Authentication required");
  }
}

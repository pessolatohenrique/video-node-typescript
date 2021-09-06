import { Request, Response } from "express";
const users = [{ name: "Henrique", email: "pessolatohenrique@gmail.com" }];

class UserController {
  static async index(req: Request, res: Response) {
    res.status(200).json(users);
  }
}

export default UserController;

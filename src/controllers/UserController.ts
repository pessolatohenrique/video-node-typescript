import { Request, Response } from "express";
import EmailService from "../services/EmailService";
const users = [{ name: "Henrique", email: "pessolatohenrique@gmail.com" }];

class UserController {
  static async index(req: Request, res: Response) {
    res.status(200).json(users);
  }

  static async email(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendEmail({
      to: { name: "Henrique Pessolato", email: "pessolatohenrique" },
      message: { subject: "Aprendendo TS", body: "Estamos aprendendo TS" },
    });
    res.status(200).json({ message: "Enviado com sucesso" });
  }
}

export default UserController;

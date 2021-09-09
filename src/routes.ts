import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

routes.get("/users", UserController.index);
routes.post("/user/email", UserController.email);

export default routes;

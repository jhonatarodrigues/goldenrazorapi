import { Request, Response } from "express";
import UsersModel from "../models/users";

async function findUser(req: Request, res: Response) {
  const clients = await UsersModel.findByPk(req.params.id);

  res.json(clients);
}

function addUser(req: Request, res: Response) {
  UsersModel.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  }).then((result) => res.json(result));
}

async function updateUser(req: Request, res: Response) {
  await UsersModel.update(
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  UsersModel.findByPk(req.params.id).then((result) => res.json(result));
}

export default { findUser, addUser };

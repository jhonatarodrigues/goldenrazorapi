import { Request, Response } from "express";
import CollaboratorModel from "../models/collaboratorModel";

async function findAll(req: Request, res: Response) {
  const clients = await CollaboratorModel.findAll({ where: { status: true } });

  res.json(clients);
}

function addCollaborator(req: Request, res: Response) {
  CollaboratorModel.create({
    name: req.body.name,
    picture: req.body.picture,
    status: req.body.status,
  }).then((result) => res.json(result));
}

export default { findAll, addCollaborator };

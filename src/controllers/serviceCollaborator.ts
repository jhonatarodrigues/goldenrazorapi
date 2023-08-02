import { Request, Response } from "express";
import serviceCollaboratorModel from "../models/serviceCollaboratorModel";
import CollaboratorModel from "../models/collaboratorModel";
import ServicesModel from "../models/servicesModel";

async function findByService(req: Request, res: Response) {
  const clients = await serviceCollaboratorModel.findAll({
    include: [
      {
        model: CollaboratorModel,
        required: false,
        as: "collaborator",
      },
      {
        model: ServicesModel,
        required: false,
        as: "service",
      },
    ],
    where: { status: true, idService: req.params.idservice },
  });

  res.json(clients);
}

function addServiceCollaborator(req: Request, res: Response) {
  serviceCollaboratorModel
    .create({
      idService: req.body.idService,
      idCollaborator: req.body.idCollaborator,
      status: req.body.status,
    })
    .then((result) => res.json(result));
}

export default { findByService, addServiceCollaborator };

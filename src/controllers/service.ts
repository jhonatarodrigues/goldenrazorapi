import { Request, Response } from "express";
import ServicesModel from "../models/servicesModel";

async function findAll(req: Request, res: Response) {
  const clients = await ServicesModel.findAll({ where: { status: true } });

  res.json(clients);
}

async function findService(req: Request, res: Response) {
  const clients = await ServicesModel.findByPk(req.params.id);

  res.json(clients);
}

function addService(req: Request, res: Response) {
  ServicesModel.create({
    title: req.body.title,
    price: req.body.price,
    averageTime: req.body.averageTime,
    status: req.body.status,
  }).then((result) => res.json(result));
}

export default { findAll, findService, addService };

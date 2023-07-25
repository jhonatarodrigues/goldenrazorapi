import UsersModel from "../models/users";

async function findAll(req: any, res: any) {
  const clients = await UsersModel.findAll();

  res.json(clients);
}

export default { findAll };

import express from "express";

import users from "./controllers/user";
import service from "./controllers/service";
import collaborator from "./controllers/collaborator";
import serviceCollaborator from "./controllers/serviceCollaborator";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/user/:id", users.findUser);
routes.post("/user", users.addUser);

routes.get("/services", service.findAll);
routes.get("/service/:id", service.findService);
routes.post("/service", service.addService);

routes.get("/collaborators", collaborator.findAll);
routes.post("/collaborator", collaborator.addCollaborator);

routes.get(
  "/serviceCollaborator/:idservice",
  serviceCollaborator.findByService
);
routes.post("/serviceCollaborator", serviceCollaborator.addServiceCollaborator);

export { routes as default };

import express from "express";

import users from "./controllers/user";
import service from "./controllers/service";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/user/:id", users.findUser);
routes.post("/user", users.addUser);

routes.get("/services", service.findAll);
routes.get("/service/:id", service.findService);
routes.post("/service", service.addService);

export { routes as default };

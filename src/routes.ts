import express from "express";

import users from "./controllers/user";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/users", users.findAll);

export { routes as default };

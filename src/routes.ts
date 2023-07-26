import express from "express";

import users from "./controllers/user";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Ciclano Fulano" });
});

routes.get("/users/:id", users.findUser);
routes.post("/users", users.addUser);

export { routes as default };

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import db from "./config/db";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

db.sync()
  .then(() => {
    console.log(`db connected!  ${process.env.DB_NAME}`);
  })
  .catch((err) => console.log(`error connection db ${err}`));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

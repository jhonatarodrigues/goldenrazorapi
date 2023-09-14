import { Request, Response } from "express";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UsersModel from "../models/users";

dotenv.config();

async function login(req: Request, res: Response) {
  try {
    const params = req.query;

    if (!(params.email && params.password)) {
      res.status(400).send("All input is required");
    }

    const user = await UsersModel.findOne({
      where: {
        [Op.and]: [{ email: params.email }, { password: params.password }],
      },
    });

    if (user?.id) {
      const tokenData = { user_id: user.id };

      const token = jwt.sign(tokenData, process.env.JWT_SECRET || "", {
        expiresIn: "1d",
      });
      const refreshToken = jwt.sign(tokenData, process.env.JWT_SECRET || "", {
        expiresIn: "30d",
      });

      res.status(200).json({ ...user.dataValues, token, refreshToken });
    }

    res.status(400).json({ error: "invalid login" });
  } catch (err) {
    console.log(err);
  }
}

export default { login };

import { DataTypes, Model } from "sequelize";
import db from "../config/db";

class ServicesModel extends Model {
  declare id: number;
}

ServicesModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    averageTime: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "Services", // We need to choose the model name
  }
);

export default ServicesModel;

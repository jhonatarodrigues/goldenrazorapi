import { DataTypes, Model } from "sequelize";
import db from "../config/db";

class CollaboratorModel extends Model {
  declare id: number;
}

CollaboratorModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "Collaborator", // We need to choose the model name
  }
);

export default CollaboratorModel;

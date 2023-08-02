import { DataTypes, Model } from "sequelize";
import db from "../config/db";
import CollaboratorModel from "./collaboratorModel";
import ServicesModel from "./servicesModel";

class ServiceCollaboratorModel extends Model {
  declare id: number;
}

ServiceCollaboratorModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idService: {
      type: DataTypes.INTEGER,
    },
    idCollaborator: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "ServiceCollaborator", // We need to choose the model name
  }
);

ServiceCollaboratorModel.belongsTo(ServicesModel, {
  foreignKey: "idService",
  as: "service",
});

ServiceCollaboratorModel.belongsTo(CollaboratorModel, {
  foreignKey: "idCollaborator",
  as: "collaborator",
});

export default ServiceCollaboratorModel;

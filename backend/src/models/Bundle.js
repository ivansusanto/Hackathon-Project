const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Bundle extends Model {}

Bundle.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    price: {
      type: DataTypes.BIGINT(20),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Bundle",
    tableName: "bundles",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Bundle;

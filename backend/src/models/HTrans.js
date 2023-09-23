const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class HTrans extends Model {}

HTrans.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    invoice: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    total: {
      type: DataTypes.BIGINT(20),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    bundles_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "HTrans",
    tableName: "h_trans",
    timestamps: false,
    underscored: true,
  }
);

module.exports = HTrans;

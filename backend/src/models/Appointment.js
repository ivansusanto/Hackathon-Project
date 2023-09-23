const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    wisata_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Appointment",
    tableName: "appointments",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Appointment;

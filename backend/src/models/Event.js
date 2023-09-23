const sequelize = require("../config/db.config");
const { Model, DataTypes } = require("sequelize");

class Event extends Model {}

Event.init(
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
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    wisata_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Event",
    tableName: "events",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Event;
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Wisata extends Model {}

Wisata.init(
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
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    jenis: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "0:Wisata, 1:UMKM",
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_id: {
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
    modelName: "Wisata",
    tableName: "wisata",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Wisata;

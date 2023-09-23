const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    bundle_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    wisata_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    percentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "Persentase harga wisata dalam bundle",
    },
  },
  {
    sequelize,
    modelName: "Item",
    tableName: "items",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Item;

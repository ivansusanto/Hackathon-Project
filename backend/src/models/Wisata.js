const sequelize = require("../config/db.config");
const { Model, DataTypes } = require("sequelize");

class Wisata extends Model {}

Wisata.init({
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    alamat: {
        type: DataTypes.STRING(255)
    },
    latitude: {
        type: DataTypes.DOUBLE
    },
    longitude: {
        type: DataTypes.DOUBLE
    },
    desc: {
        type: DataTypes.TEXT
    },
    jenis: {
        type: DataTypes.INTEGER(1)
    },
    foto: {
        type: DataTypes.STRING(255)
    },
    user_id: {
        type: DataTypes.INTEGER(11)
    },
    status: {
        type: DataTypes.INTEGER(1)
    }
}, {
    sequelize,
    modelName: "Wisata",
    tableName: "wisata",
    timestamps: false,
    underscored: true
});

module.exports = Wisata;
const sequelize = require("../config/db.config");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(255)
    },
    password: {
        type: DataTypes.STRING(255)
    },
    display_name: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    },
    no_telp: {
        type: DataTypes.STRING(15)
    },
    no_rek: {
        type: DataTypes.STRING(25),
    },
    role: {
        type: DataTypes.INTEGER(1)
    },
    status: {
        type: DataTypes.INTEGER(1)
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
    underscored: true
});

module.exports = User;
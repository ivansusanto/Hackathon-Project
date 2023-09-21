const sequelize = require("../config/db.config");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init({
    id: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
    underscored: true
});

module.exports = User;
const sequelize = require("../config/db.config");
const { Model, DataTypes } = require("sequelize");

class Event extends Model {}

Event.init({
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    desc: {
        type: DataTypes.TEXT
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    foto: {
        type: DataTypes.STRING(255)
    },
    wisata_id: {
        type: DataTypes.INTEGER(11)
    },
    status: {
        type: DataTypes.INTEGER(1)
    }
}, {
    sequelize,
    modelName: "Event",
    tableName: "events",
    timestamps: false,
    underscored: true
});

module.exports = Event;
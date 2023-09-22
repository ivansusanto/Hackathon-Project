const Sequelize = require("sequelize");
const env = require("./env.config");

const db_name = env("DB_NAME");
const user = env("DB_USER");
const password = env("DB_PASSWORD");
const host = env("DB_HOST");
const port = 3306;
const dialect = "mysql";

const sequelize = new Sequelize(
    db_name,
    user,
    password,
    {
        host: host,
        port: port,
        dialect: dialect,
        logging: false,
        timezone: "+07:00"
    }
);

module.exports = sequelize;
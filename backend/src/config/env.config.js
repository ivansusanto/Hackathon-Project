require("dotenv/config");

const dictionary = {
    SECRET_KEY: process.env.SECRET_KEY,
    HOST: process.env.HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    CLIENT_KEY: process.env.CLIENT_KEY,
    SERVER_KEY: process.env.SERVER_KEY,
};

module.exports = function env(key) {
    return dictionary[key];
}
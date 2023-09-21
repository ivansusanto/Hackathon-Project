const jwt = require("jsonwebtoken");
const env = require("../config/env.config");

const generateToken = (payload, duration) => {
    return jwt.sign(
        { ...payload },
        env("SECRET_KEY"),
        { expiresIn: duration }
    );
}

module.exports = generateToken;
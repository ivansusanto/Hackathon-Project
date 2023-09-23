const jwt = require("jsonwebtoken");
const env = require("../config/env.config");
const User = require("../models/User");

const AdminMiddleware = async (req, res, next) => {
    const user = await User.findByPk(req.user);
    
    if (user.role === 1) {
        next();
    } else {
        return res.status(404).json({ message: 'User Bukan Admin' });
    }
};

module.exports = AdminMiddleware;
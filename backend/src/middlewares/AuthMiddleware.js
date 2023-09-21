const jwt = require("jsonwebtoken");
const env = require("../config/env.config");
const User = require("../models/User");

const AuthMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decodedToken = jwt.verify(token, env('SECRET_KEY'));
        const username = decodedToken.username;
        
        const user = await User.findByPk(username);
        
        if (user) {
            req.user = username;
            next();
        } else {
            return res.status(404).json({ message: 'User Not Found' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

module.exports = AuthMiddleware;
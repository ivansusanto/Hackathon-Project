const express = require("express");
const usersRouter = require("./router.users");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const apiRouter = express.Router();

// apiRouter.use(AuthMiddleware);
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
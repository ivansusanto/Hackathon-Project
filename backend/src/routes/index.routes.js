const express = require("express");
const usersRouter = require("./router.users");
const wisataRouter = require("./router.wisata");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const apiRouter = express.Router();

// apiRouter.use(AuthMiddleware);
apiRouter.use('/users', usersRouter);
apiRouter.use('/wisata', wisataRouter);

module.exports = apiRouter;
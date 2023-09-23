const express = require("express");
const usersRouter = require("./router.users");
const wisataRouter = require("./router.wisata");
const bundleRouter = require("./router.bundle");

const apiRouter = express.Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/wisata', wisataRouter);
apiRouter.use('/bundle', bundleRouter);

module.exports = apiRouter;
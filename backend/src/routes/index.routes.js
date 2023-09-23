const express = require("express");
const usersRouter = require("./router.users");
const wisataRouter = require("./router.wisata");
const transRouter = require("./router.transaction");
const bundleRouter = require("./router.bundle");
const eventRouter = require("./router.events");

const apiRouter = express.Router();

apiRouter.use('/assets', express.static('uploads'));
apiRouter.use('/users', usersRouter);
apiRouter.use('/wisata', wisataRouter);
apiRouter.use('/transaction', transRouter)
apiRouter.use('/events', eventRouter);
apiRouter.use('/bundle', bundleRouter);

module.exports = apiRouter;
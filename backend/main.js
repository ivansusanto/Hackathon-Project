const express = require("express");
const apiRouter = require("./src/routes/index.routes");
const env = require("./src/config/env.config");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        credentials: true,
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
    })
);

const Associations = require("./src/models/models.associations.js");
Associations();

app.use('/api', apiRouter);

app.all('*', (req, res) => {
    return res.status(404).json({ message: `Page Not Found!` });
});

const port = 3000;
app.listen(port, env("HOST"), () => console.log(`Listening on port ${port}!`));
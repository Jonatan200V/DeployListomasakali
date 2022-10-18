const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routerUser = require("../routes/user.routes");
const routerEncuesta = require("../routes/encuesta.routes");
const routerForm = require("../routes/forms.routes");

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(routerUser);
app.use(routerEncuesta);
app.use(routerForm);

module.exports = app;

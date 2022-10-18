const sequelize = require("./database/database");
require("./models/Encuesta.models");
require("./models/User.models");
const app = require("./src/app");
require("dotenv").config();
// const { PORT } = process.env;
const PORT = 4100;
const connectDatabase = async () => {
  try {
    sequelize.sync({ force: false });
    app.listen(PORT);
    console.log(`Estamos corriendo en el puerto ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

connectDatabase();

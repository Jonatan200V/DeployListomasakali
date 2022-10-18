const Sequelize = require("sequelize");

require("dotenv").config();

// const { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
console.log("HOLA MUNDO");
const sequelize = new Sequelize(
  `postgresql://postgres:5hV97Ke02ZasxBuBZY3M@containers-us-west-108.railway.app:7425/railway`
  // {
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false,
  //     },
  //   },
  // }
);

module.exports = sequelize;

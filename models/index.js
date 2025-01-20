const Sequelize = require("sequelize");
const dbConfig = require("../configuration/db.config.js"); // Adjust the path

// Debug: Log the configuration to ensure correct values are loaded
console.log(dbConfig.production);

const sequelize = new Sequelize(
  dbConfig.production.database, // Correct key for database
  dbConfig.production.username, // Correct key for username
  dbConfig.production.password, // Correct key for password
  {
    host: dbConfig.production.host, // Correct key for host
    port: dbConfig.production.port, // Correct key for port
    dialect: dbConfig.production.dialect, // Correct key for dialect
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.message);
  });


const db = {};

// Import all models
db.users = require("./user.js")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

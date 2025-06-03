const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance to connect to the PostgreSQL database
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name from environment variables
  process.env.DB_USER, // Database username
  process.env.DB_PASS, // Database password
  {
    host: process.env.DB_HOST, // Database server host
    port: process.env.DB_PORT, // Database server port
    dialect: 'postgres', // Using PostgreSQL as the database engine
  } 
);

module.exports = sequelize; // Exporting the Sequelize instance for use in the app

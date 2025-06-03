const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Listing model representing a listing in the database
const Listing = sequelize.define('Listing', {
  // Path to the uploaded image file (required)
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Name of the user who created the listing (required)
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Location related to the listing (required)
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Timestamp when the listing was created, defaults to current time
  timeStamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  // Rating given to the listing (required)
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Exporting the model for use in other parts of the app
module.exports = Listing;

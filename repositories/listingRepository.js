// importing the listing model
const Listing = require('../models/listing');

// Create a new listing with the given details
exports.create = async ({ userName, location, rating, imagePath }) => {
  return await Listing.create({ userName, location, rating, imagePath });
};

// Retrieve all listings from the database
exports.findAll = async () => {
  return await Listing.findAll();
};

// Find a single listing by its unique ID
exports.findById = async (id) => {
  return await Listing.findByPk(id);
};

// the repository layer exposes functions like create, findAll, and findById 
// to manage listings without exposing how the data is stored or retrieved.
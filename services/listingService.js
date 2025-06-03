// importing the listingRepository module from repositories
const listingRepository = require('../repositories/listingRepository');

// Create a new listing using provided data and image path
exports.createListing = async (data, imagePath) => {
  const listingData = {
    userName: data.userName,
    location: data.location,
    rating: data.rating,
    imagePath: imagePath
  };

  return await listingRepository.create(listingData);
};

// Get all listings from the repository
exports.getAllListings = async () => {
  return await listingRepository.findAll();
};

// Get a single listing by its ID from the repository
exports.getListingById = async (id) => {
  return await listingRepository.findById(id);
};

// The service layer - acts as middleman between app's controllers or routes 
// and the repository layer, it keeps business logic centralized.
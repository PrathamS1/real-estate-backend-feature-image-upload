const express = require('express');
const router = express.Router();
const multer = require('multer');
const listingController = require('../controllers/listingController');

// Configure multer to store uploaded files in 'uploads/' folder with a unique filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

// Initialize multer with the storage settings for handling file uploads
const upload = multer({ storage });

// Route to create a new listing with an image upload handled by multer
router.post('/', upload.single('image'), listingController.createListing);
// Route to get all listings
router.get('/', listingController.getListings);
// Route to get a single listing by its ID
router.get('/:id', listingController.getListing);

// Export the router to be used in the main app
module.exports = router;

// Route layer - defines URL endpoints, maps endpoints to specific controller functions
// handles middleware(file uploads) and organizes routes logically
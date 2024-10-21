// tripRoutes.js
const express = require('express');
const router = express.Router();
const { searchDestinations, createItinerary } = require('../controllers/tripController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/destinations', searchDestinations);
router.post('/itinerary',authenticate, createItinerary);

module.exports = router;
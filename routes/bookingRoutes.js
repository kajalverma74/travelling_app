const express = require('express');
const router = express.Router();
const { createBooking, bookHotel } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

// Route for booking a flight
router.post('/book-flight', authenticate, createBooking);


router.post('/book-hotel', authenticate, bookHotel);

module.exports = router;


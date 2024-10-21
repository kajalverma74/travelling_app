const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    details: {
        flightDetails: {
            airline: String,
            flightNumber: String,
            departureTime: Date,
            arrivalTime: Date
        }
    },

    details: {
        hotelDetails: {
            hotelName: String,
            location: String,
            checkInDate: Date,
            checkOutDate: Date,
        }
    },


}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;

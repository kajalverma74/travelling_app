const Review = require('../models/reviewModels')

async function submitReview(req, res) {
    try {
        const {
            userId,
            hotelId,
            destination,
            rating,
            comment
        } = req.body;

        const review = await Review.create({
            userId,
            hotelId,
            destination,
            rating,
            comment,
            createAt: new Date(),
        });

        res.status(201).json({
            review
        });
    } catch (err) {
        res.status(400).json({
            error: error.message
        });
    }

}

module.exports = {
    submitReview
};
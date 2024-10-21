const Payment = require('../models/paymentModels')

async function processPayment(req, res) {
    try {

        const {
            userId, amount, paymentDetails } = req.body;

        const payment = await Payment.create({
            userId,
            amount,
            paymentDetails,
            status: 'Success',
            createAt: new Date(),
        })

        res.status(201).json({
            payment
        });
    }

    catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}
module.exports = { processPayment };

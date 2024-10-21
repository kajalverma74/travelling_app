const Notification = require('../models/notificationModels')

async function sendNotification(req, res) {
    try {
        const { userId, message } = req.body;

        const notification = await Notification.create({

            userId,
            message,
            sendAt: new Date(),
        });

        res.status(201).json({ notification });

    }

    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

module.exports = { sendNotification };

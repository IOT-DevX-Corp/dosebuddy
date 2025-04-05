const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.user.id })
            .sort({ timestamp: -1 });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createNotification = async (req, res) => {
    try {
        const { type, title, content } = req.body;
        const notification = new Notification({
            userId: req.user.id,
            type,
            title,
            content,
            timestamp: new Date()
        });

        await notification.save();
        res.json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
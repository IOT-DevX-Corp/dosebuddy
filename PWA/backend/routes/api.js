const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');
const notificationController = require('../controllers/notificationController');

// User routes
router.get('/user/profile', auth, userController.getUserProfile);
router.put('/user/qr-code', auth, userController.updateQRCode);
router.put('/user/medications', auth, userController.updateMedications);

// Notification routes
router.get('/notifications', auth, notificationController.getNotifications);
router.post('/notifications', auth, notificationController.createNotification);

module.exports = router;
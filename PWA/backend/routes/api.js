import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth';
import { getUserProfile, updateQRCode, updateMedications } from '../controllers/userController';
import { getNotifications, createNotification } from '../controllers/notificationController';

// User routes
router.get('/user/profile', auth, getUserProfile);
router.put('/user/qr-code', auth, updateQRCode);
router.put('/user/medications', auth, updateMedications);

// Notification routes
router.get('/notifications', auth, getNotifications);
router.post('/notifications', auth, createNotification);

export default router;
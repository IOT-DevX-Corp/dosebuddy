import { Router } from 'express';
import webpush from 'web-push';
const router = Router();
import { User } from '../models/User';

router.post('/subscribe', async (req, res) => {
    try {
        const subscription = req.body;
        const user = await User.findById(req.user.id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Store subscription in user document
        user.pushSubscription = subscription;
        await user.save();

        res.status(201).json({ message: 'Push notification subscription successful' });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ message: 'Subscription failed' });
    }
});

export default router;
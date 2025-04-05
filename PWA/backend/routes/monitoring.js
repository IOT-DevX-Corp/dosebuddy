import { Router } from 'express';
const router = Router();
import { findOne } from '../models/User';
import Notification from '../models/Notification';
import { findById } from '../models/Notification';

router.post('/request', async (req, res) => {
    try {
        const { targetUsername, targetEmail, modelNumber, senderUsername, senderEmail } = req.body;

        // Find target user
        const targetUser = await findOne({ 
            username: targetUsername,
            email: targetEmail 
        });

        if (!targetUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create notification
        const notification = new Notification({
            recipient: targetUser._id,
            title: 'Monitoring Request',
            message: `${senderUsername} has requested to monitor you, his/her email id: ${senderEmail}`,
            type: 'monitoring_request',
            data: {
                senderUsername,
                senderEmail,
                modelNumber,
                status: 'pending'
            }
        });

        await notification.save();

        res.status(200).json({ message: 'Request sent successfully' });
    } catch (error) {
        console.error('Monitoring request error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Handle request response (accept/deny)
router.post('/response', async (req, res) => {
    try {
        const { notificationId, accept } = req.body;

        const notification = await findById(notificationId);
        if (!notification) {
            return res.status(404).json({ message: 'Request not found' });
        }

        notification.data.status = accept ? 'accepted' : 'rejected';
        await notification.save();

        // If accepted, create monitoring relationship
        if (accept) {
            // Add logic to create monitoring relationship
        }

        res.status(200).json({ 
            message: `Request ${accept ? 'accepted' : 'rejected'} successfully` 
        });
    } catch (error) {
        console.error('Monitoring response error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
import User from '../models/User';
import Notification, { insertMany } from '../models/Notification';

export async function getUserProfile(req, res) {
    try {
        const user = await User.findById(req.user.id)
            .select('-password')
            .populate('monitoredBy', 'username email')
            .populate('monitoring', 'username email');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateQRCode(req, res) {
    try {
        const { qrCode } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // If first time adding QR code, create welcome notification
        if (!user.qrCode && qrCode) {
            const notification = new Notification({
                userId: user._id,
                type: 'system',
                title: 'Welcome to DoseBuddy',
                content: 'Start your journey to better medication management',
                timestamp: new Date()
            });
            await notification.save();
        }

        user.qrCode = qrCode;
        await user.save();

        res.json({ message: 'QR code updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

export async function updateMedications(req, res) {
    try {
        const { medications } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.medications = medications;
        await user.save();

        // Notify monitors about medication update
        if (user.monitoredBy.length > 0) {
            const notification = {
                type: 'system',
                title: 'Medication Schedule Updated',
                content: `${user.username} has updated their medication schedule`
            };

            await insertMany(
                user.monitoredBy.map(monitorId => ({
                    ...notification,
                    userId: monitorId
                }))
            );
        }

        res.json({ message: 'Medications updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
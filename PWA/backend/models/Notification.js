import { Schema, model } from 'mongoose';

const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['reminder', 'system'], required: true },
    title: { type: String, required: true },
    content: String,
    timestamp: { type: Date, default: Date.now },
    read: { type: Boolean, default: false }
});

export default model('Notification', notificationSchema);
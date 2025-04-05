import { User } from '../models/User';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { config } from '../config/config.js';

const transporter = nodemailer.createTransport(config.email);

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobileNumber } = req.body;
    
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      username: `${firstName} ${lastName}`
    });

    const otp = crypto.randomBytes(4).toString('hex').toUpperCase();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await user.save();

    await transporter.sendMail({
      to: email,
      subject: 'Verify your DoseBuddy account',
      html: `Your verification code is: DB-${otp}`
    });

    res.status(201).json({ message: 'Registration successful. Please check your email for verification.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const otp = crypto.randomBytes(4).toString('hex').toUpperCase();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    await transporter.sendMail({
      to: email,
      subject: 'DoseBuddy Login OTP',
      html: `Your login OTP is: DB-${otp}`
    });

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
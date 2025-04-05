import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcryptjs';

const medicationScheduleSchema = new Schema({
  time: { type: String, required: true },
  taken: { type: Boolean, default: false }
});

const medicationSchema = new Schema({
  name: { type: String, required: true },
  pills: { type: Number, required: true, min: 1 },
  doses: { type: Number, required: true, min: 1 },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  conditions: { type: String, required: true },
  schedule: [medicationScheduleSchema]
});

const userSchema = new Schema({
  firstName: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 2 
  },
  lastName: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 2 
  },
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8 
  },
  mobileNumber: { 
    type: String, 
    required: true,
    match: [/^\+?[\d\s-]{10,}$/, 'Please enter a valid mobile number'] 
  },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiry: { type: Date },
  qrCode: { type: String, default: '' },
  medications: [medicationSchema],
  monitoredBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  monitoring: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: true
});

// Indexes for better query performance
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
  if (!this.username) {
    this.username = `${this.firstName.toLowerCase()}_${this.lastName.toLowerCase()}`;
  }
  next();
});

// Add method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await compare(candidatePassword, this.password);
};

const User = model('User', userSchema);

export default { User };
export const config = {
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/dosebuddy',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  email: {
    service: 'Gmail', // or any other service
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-specific-password'
    }
  }
};
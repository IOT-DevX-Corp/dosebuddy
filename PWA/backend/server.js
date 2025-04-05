import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/database.js';

const app = express();

// Connect to MongoDB with error handling
const startServer = async () => {
  try {
    await connectDB();
    
    app.use(express.json());

    const monitoringRoutes = require('./routes/monitoring');
    app.use('/api/monitoring', monitoringRoutes);

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
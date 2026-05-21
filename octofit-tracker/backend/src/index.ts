import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit';
const PORT = Number(process.env.PORT) || 8000;

async function start() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB:', MONGO_URL);
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }

  app.get('/', (req, res) => res.json({ status: 'ok' }));

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

start();

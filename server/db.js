import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

export const setupDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not defined.');
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');

    // Seed Admin User if not exists
    const adminCount = await User.countDocuments({ username: 'ISAACMBATIA.3932' });
    if (adminCount === 0) {
      const hashedPassword = await bcrypt.hash('Mumbai3932.kenya', 10);
      await User.create({ username: 'ISAACMBATIA.3932', password: hashedPassword });
      console.log('Admin user seeded: ISAACMBATIA.3932');
    }

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// --- Mongoose Schemas ---

const houseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  description: String,
  amenities: [String],
  landmarks: String,
  imageUrl: String,
  images: [String],
  isNew: { type: Boolean, default: true },
  verified: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export const House = mongoose.model('House', houseSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const User = mongoose.model('User', userSchema);

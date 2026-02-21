import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { setupDb, House, User } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'kiambu-rental-secret-key';

app.use(cors());
app.use(express.json());

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'kiambu-rental',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    },
});

const upload = multer({ storage: storage });

// Initialize DB (MongoDB)
setupDb().then(() => {
    console.log('Database initialized');
});

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- Routes ---

// Login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) return res.status(400).json({ message: 'User not found' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Get All Houses
app.get('/api/houses', async (req, res) => {
    try {
        const houses = await House.find().sort({ createdAt: -1 });
        res.json(houses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch houses' });
    }
});

// Add New House (Protected)
app.post('/api/houses', authenticateToken, upload.array('images', 10), async (req, res) => {
    try {
        const { title, location, price, type, description, amenities, landmarks } = req.body;

        // Cloudinary URLs are available in req.files[].path
        const imagePaths = req.files.map(file => file.path);
        const mainImage = imagePaths.length > 0 ? imagePaths[0] : '';
        const amenitiesArray = amenities ? amenities.split(',').map(a => a.trim()) : [];

        const newHouse = new House({
            title,
            location,
            price: Number(price),
            type,
            description,
            amenities: amenitiesArray,
            landmarks,
            imageUrl: mainImage,
            images: imagePaths,
            isNew: true,
            verified: true
        });

        await newHouse.save();

        res.status(201).json({ message: 'House added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding house' });
    }
});

// Get Single House
app.get('/api/houses/:id', async (req, res) => {
    try {
        const house = await House.findById(req.params.id);
        if (!house) return res.status(404).json({ message: 'House not found' });
        res.json(house);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch house details' });
    }
});

// Delete House (Protected)
app.delete('/api/houses/:id', authenticateToken, async (req, res) => {
    try {
        await House.findByIdAndDelete(req.params.id);
        res.json({ message: 'House deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to delete house' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;

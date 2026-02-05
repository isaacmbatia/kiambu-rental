import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { setupDb, getDb } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const SECRET_KEY = 'kiambu-rental-secret-key'; // In prod, use env var

app.use(cors());
app.use(express.json());

// Serve uploaded images directly
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Setup for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
    }
});
const upload = multer({ storage });

// Initialize DB
setupDb().then(async () => {
    const db = await getDb();
    // Seed Admin User if not exists
    const admin = await db.get('SELECT * FROM users WHERE username = ?', 'ISAACMBATIA.3932');
    if (!admin) {
        const hashedPassword = await bcrypt.hash('Mumbai3932.kenya', 10);
        await db.run('INSERT INTO users (username, password) VALUES (?, ?)', 'ISAACMBATIA.3932', hashedPassword);
        console.log('Admin user created: ISAACMBATIA.3932');
    }
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
    const { username, password } = req.body;
    const db = await getDb();
    const user = await db.get('SELECT * FROM users WHERE username = ?', username);

    if (!user) return res.status(400).json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '24h' });
    res.json({ token });
});

// Get All Houses
app.get('/api/houses', async (req, res) => {
    const db = await getDb();
    const houses = await db.all('SELECT * FROM houses ORDER BY createdAt DESC');
    // Parse JSON strings back to arrays
    const parsedHouses = houses.map(h => ({
        ...h,
        images: JSON.parse(h.images || '[]'),
        amenities: JSON.parse(h.amenities || '[]'),
        isNew: !!h.isNew,
        verified: !!h.verified
    }));
    res.json(parsedHouses);
});

// Add New House (Protected)
app.post('/api/houses', authenticateToken, upload.array('images', 10), async (req, res) => {
    try {
        const db = await getDb();
        const { title, location, price, type, description, amenities, landmarks } = req.body;

        // Handle images
        // We will store paths relative to /uploads
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
        const mainImage = imagePaths.length > 0 ? imagePaths[0] : '';
        const amenitiesArray = amenities ? amenities.split(',').map(a => a.trim()) : [];

        await db.run(`
            INSERT INTO houses (title, location, price, type, description, amenities, landmarks, imageUrl, images, isNew, verified)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
            title,
            location,
            price,
            type,
            description,
            JSON.stringify(amenitiesArray),
            landmarks,
            mainImage,
            JSON.stringify(imagePaths),
            1, // isNew = true by default
            1  // verified = true by default
        );

        res.status(201).json({ message: 'House added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding house' });
    }
});

// Get Single House
app.get('/api/houses/:id', async (req, res) => {
    const db = await getDb();
    const house = await db.get('SELECT * FROM houses WHERE id = ?', req.params.id);

    if (!house) return res.status(404).json({ message: 'House not found' });

    // Parse JSON fields
    const parsedHouse = {
        ...house,
        images: JSON.parse(house.images || '[]'),
        amenities: JSON.parse(house.amenities || '[]'),
        isNew: !!house.isNew,
        verified: !!house.verified
    };
    res.json(parsedHouse);
});

// Delete House (Protected)
app.delete('/api/houses/:id', authenticateToken, async (req, res) => {
    const db = await getDb();
    await db.run('DELETE FROM houses WHERE id = ?', req.params.id);
    res.json({ message: 'House deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

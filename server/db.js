import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the database
const dbPromise = open({
    filename: './database.sqlite',
    driver: sqlite3.Database
});

export const setupDb = async () => {
    const db = await dbPromise;

    // Create Houses Table
    await db.exec(`
    CREATE TABLE IF NOT EXISTS houses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      location TEXT NOT NULL,
      price INTEGER NOT NULL,
      type TEXT NOT NULL,
      description TEXT,
      amenities TEXT,
      landmarks TEXT,
      imageUrl TEXT,
      images TEXT,
      isNew BOOLEAN DEFAULT 0,
      verified BOOLEAN DEFAULT 1,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

    // Create Admin User Table (for simple auth)
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

    // Check if admin exists, if not create default
    // Default: admin / admin123 (In production, use hashed passwords)
    // For simplicity here we will store a simple hash or just plain text if easier for now, 
    // but let's do it right with bcrypt in the route handler or seeding.
    // We'll seed in the main server start if needed.
};

export const getDb = async () => {
    return await dbPromise;
};

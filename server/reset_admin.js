import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';

const dbPromise = open({
    filename: './database.sqlite',
    driver: sqlite3.Database
});

const updateAdmin = async () => {
    const db = await dbPromise;
    const newUsername = 'ISAACMBATIA.3932';
    const newPassword = 'Mumbai3932.kenya';
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Check if old admin exists
    const oldAdmin = await db.get('SELECT * FROM users WHERE username = ?', 'admin');

    if (oldAdmin) {
        // Update existing admin
        await db.run('UPDATE users SET username = ?, password = ? WHERE username = ?', newUsername, hashedPassword, 'admin');
        console.log(`Updated 'admin' to '${newUsername}'`);
    } else {
        // Check if new admin already exists
        const newAdmin = await db.get('SELECT * FROM users WHERE username = ?', newUsername);
        if (newAdmin) {
            // Update password just in case
            await db.run('UPDATE users SET password = ? WHERE username = ?', hashedPassword, newUsername);
            console.log(`Updated password for '${newUsername}'`);
        } else {
            // Create new admin
            await db.run('INSERT INTO users (username, password) VALUES (?, ?)', newUsername, hashedPassword);
            console.log(`Created new user '${newUsername}'`);
        }
    }
};

updateAdmin().catch(console.error);

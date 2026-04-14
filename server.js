const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const USER_FILE = path.join(__dirname, 'user.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve HTML files

// --- REGISTER ENDPOINT ---
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    fs.readFile(USER_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ success: false, message: 'Error reading user storage.' });

        const users = JSON.parse(data || '[]');
        
        // Check if email already exists
        const exists = users.find(u => u.email === email);
        if (exists) {
            return res.status(400).json({ success: false, message: 'Email already registered.' });
        }

        // Add user
        users.push({ name, email, password });

        fs.writeFile(USER_FILE, JSON.stringify(users, null, 2), (err) => {
            if (err) return res.status(500).json({ success: false, message: 'Error saving user.' });
            res.json({ success: true, message: 'Registration successful!' });
        });
    });
});

// --- LOGIN ENDPOINT ---
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    fs.readFile(USER_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ success: false, message: 'Error reading user storage.' });

        const users = JSON.parse(data || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            res.json({ 
                success: true, 
                message: 'Login successful!',
                user: { name: user.name, email: user.email }
             });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`HealthBite Server running at http://localhost:${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const UserModel = require('./models/User')

const app = express();
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;
const PORT = 3000


app.post('/register', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.status(200).json({ message: 'Success' });
            } else {
                res.status(401).json({ error: 'Incorrect Password' });
            }
        } else {
            res.status(404).json({ error: 'No record found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

mongoose.connect(mongodb_uri).then(() => {
    console.log("Database Connected Successfully!");
    app.listen(PORT, () => {
        console.log("The server is active on port 3000");
    });
}).catch((error) => {
    console.log(error);
})
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const UserModel = require('./models/User')

const app = express();
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;
const PORT = 3000


app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Incorrect Password");
                }
            } else {
                res.json("No record existed");
            }
        })
})

mongoose.connect(mongodb_uri).then(() => {
    console.log("Database Connected Successfully!");
    app.listen(PORT, () => {
        console.log("The server is active on port 3000");
    });
}).catch((error) => {
    console.log(error);
})
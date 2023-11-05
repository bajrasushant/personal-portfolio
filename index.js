const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;
const PORT = 3000


mongoose.connect(mongodb_uri).then(() => {
    console.log("Database Connected Successfully!");
    app.listen(PORT, () => {
        console.log("The server is active on port 3000");
    });
}).catch((error) => {
    console.log(error);
})
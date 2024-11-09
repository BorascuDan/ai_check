// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // To read .env file

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection failed:", error.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

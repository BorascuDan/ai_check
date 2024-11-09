const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

// Load your JSON data
const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

// MongoDB connection URI from .env file
const mongoURI = process.env.MONGO_URI;

// Define the schema (structure) for the data
const DataSchema = new mongoose.Schema({}, { strict: false });
const DataModel = mongoose.model('DataModel', DataSchema);  

// Connect to MongoDB and insert data
mongoose.connect(mongoURI)
    .then(async () => {
        console.log('MongoDB connected');
        try {
            await DataModel.insertMany(data);
            console.log('Data inserted successfully');
        } catch (error) {
            console.error('Error inserting data:', error);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch((error) => console.error('MongoDB connection failed:', error.message));

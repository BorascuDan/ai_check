const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(async () => {
        console.log('MongoDB connected');
        try {
            await mongoose.connection.db.dropDatabase();
            console.log('Database cleared successfully');
        } catch (error) {
            console.error('Error clearing database:', error);
        } finally {
            mongoose.connection.close();
        }
    })
    .catch((error) => console.error('MongoDB connection failed:', error.message));

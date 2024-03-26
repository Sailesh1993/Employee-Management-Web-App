const mongoose = require('mongoose');
const config = require('./config');

// MongoDB connection URL

const mongoURI = ;
// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get the default connection;
const db = mongoose.connection;

// Event listners for MongoDB connection
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('MongoDB connection error;', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Export the database connection
module.exports = db;

// Test the connection
setTimeout(() => {
    if (db.readyState === 1) {
        console.log('MongoDB connection test successful');
    } else {
        console.log('MongoDB connection test failed');
    }
}, 5000); // Adjust the delay as needed
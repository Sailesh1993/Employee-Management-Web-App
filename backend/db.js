const mongoose = require('mongoose');

// MongoDB connection URL

const mongoURI = 'mongodb+srv://karkisaileshnep:5mvdNBiQSNqeKqKZ@cluster0.ppayuw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Connect to MongoDB
mongoose.connect(mongoURI, {
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
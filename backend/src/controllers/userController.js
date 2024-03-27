const User = require('../models/user');

// Create a new user
exports.insertUser = async(req,res) => {
    try {
        const { firstname, lastname } = req.body;
        const newUser = new User({ firstname, lastname });
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
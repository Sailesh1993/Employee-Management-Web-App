const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/insert', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
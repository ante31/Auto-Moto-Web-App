const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/find/all', userController.getUsers);

// Route to get a specific user by ID
router.get('/find/:id', userController.getUserById);

// Route to create a new user
router.post('/add', userController.createUser);

// Route to update an existing user by ID
router.put('/update/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/delete/:id', userController.deleteUser);

// Other user-related routes...

module.exports = router;

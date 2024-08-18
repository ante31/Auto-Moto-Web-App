const express = require('express');
const router = express.Router();
const likeController = require('../controllers/LikeController');

// Route to get all likes
router.get('/find/all', likeController.getLikes);

// Route to get a specific like by ID
router.get('/find/:id', likeController.getLikeById);

// Route to create a new like
router.post('/add', likeController.createLike);

// Route to update an existing like by ID
router.put('/update/:id', likeController.updateLike);

// Route to delete a like by ID
router.delete('/delete/:id', likeController.deleteLike);

module.exports = router;

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/CommentController');

// Route to get all comments
router.get('/find/all', commentController.getComments);

// Route to get a specific comment by ID
router.get('/find/:id', commentController.getCommentById);

// Route to create a new comment
router.post('/add', commentController.createComment);

// Route to update an existing comment by ID
router.put('/update/:id', commentController.updateComment);

// Route to delete a comment by ID
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;

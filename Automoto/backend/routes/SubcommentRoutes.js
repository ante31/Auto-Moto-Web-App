const express = require('express');
const router = express.Router();
const subcommentController = require('../controllers/SubcommentController');

// Route to get all subcomments
router.get('/find/all', subcommentController.getSubcomments);

// Route to get a specific subcomment by ID
router.get('/find/:id', subcommentController.getSubcommentById);

// Route to create a new subcomment
router.post('/add', subcommentController.createSubcomment);

// Route to update an existing subcomment by ID
router.put('/update/:id', subcommentController.updateSubcomment);

// Route to delete a subcomment by ID
router.delete('/delete/:id', subcommentController.deleteSubcomment);

module.exports = router;

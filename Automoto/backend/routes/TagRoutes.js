const express = require('express');
const router = express.Router();
const tagController = require('../controllers/TagController');

// Route to get all tags
router.get('/find/all', tagController.getTags);

// Route to get a specific tag by ID
router.get('/find/:id', tagController.getTagById);

// Route to create a new tag
router.post('/add', tagController.createTag);

// Route to update an existing tag by ID
router.put('/update/:id', tagController.updateTag);

// Route to delete a tag by ID
router.delete('/delete/:id', tagController.deleteTag);

module.exports = router;

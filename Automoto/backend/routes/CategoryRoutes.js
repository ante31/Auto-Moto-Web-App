const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Route to get all categories
router.get('/find/all', categoryController.getCategories);

// Route to get a specific category by ID
router.get('/find/:id', categoryController.getCategoryById);

// Route to create a new category
router.post('/add', categoryController.createCategory);

// Route to update an existing category by ID
router.put('/update/:id', categoryController.updateCategory);

// Route to delete a category by ID
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;

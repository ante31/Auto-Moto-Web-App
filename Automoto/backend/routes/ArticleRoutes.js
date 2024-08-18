const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Route to get all articles
router.get('/find/all', articleController.getArticles);

// Route to get a specific article by ID
router.get('/find/:id', articleController.getArticleById);

// Route to create a new article
router.post('/add', articleController.createArticle);

// Route to update an existing article by ID
router.put('/update/:id', articleController.updateArticle);

// Route to delete an article by ID
router.delete('/delete/:id', articleController.deleteArticle);

// Other article-related routes...

module.exports = router;

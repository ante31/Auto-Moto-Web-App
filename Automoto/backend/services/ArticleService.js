const Article = require('../models/ArticleModel');

// Get all articles
exports.getAllArticles = async () => {
  try {
    return await Article.findAll();
  } catch (error) {
    console.error("Error fetching all articles:", error);
    throw error;
  }
};

// Get a article by ID
exports.getArticleById = async (id) => {
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      throw new Error(`Article with ID ${id} not found`);
    }
    return article;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};

// Create a new article
exports.createArticle = async (articleData) => {
  try {
    const article = await Article.create(articleData);
    return article;
  } catch (error) {
    console.error("Error creating article:", error);
    throw error;
  }
};

// Update a article by ID
exports.updateArticle = async (id, articleData) => {
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      throw new Error(`Article with ID ${id} not found`);
    }
    await article.update(articleData);
    return article;
  } catch (error) {
    console.error(`Error updating article with ID ${id}:`, error);
    throw error;
  }
};

// Delete a article by ID
exports.deleteArticle = async (id) => {
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      throw new Error(`Article with ID ${id} not found`);
    }
    await article.destroy();
    return { message: `Article with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting article with ID ${id}:`, error);
    throw error;
  }
};

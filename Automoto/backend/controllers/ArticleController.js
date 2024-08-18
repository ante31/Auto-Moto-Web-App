const articleService = require('../services/ArticleService');

exports.getArticles = async (req, res, next) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

exports.getArticleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await articleService.getArticleById(id);
    res.json(article);
  } catch (error) {
    next(error);
  }
};

exports.createArticle = async (req, res, next) => {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).json(article);
  } catch (error) {
    console.error("Error in createArticle controller:", error);
    next(error);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedArticle = await articleService.updateArticle(id, req.body);
    res.json(updatedArticle);
  } catch (error) {
    console.error("Error in updateArticle controller:", error);
    next(error);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    await articleService.deleteArticle(id);
    res.status(204).end(); // No Content
  } catch (error) {
    console.error("Error in deleteArticle controller:", error);
    next(error);
  }
};

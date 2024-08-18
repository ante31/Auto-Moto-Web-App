const commentService = require('../services/CommentService');

exports.getComments = async (req, res, next) => {
  try {
    const comments = await commentService.getAllComments();
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

exports.getCommentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await commentService.getCommentById(id);
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const comment = await commentService.createComment(req.body);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedComment = await commentService.updateComment(id, req.body);
    res.json(updatedComment);
  } catch (error) {
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    await commentService.deleteComment(id);
    res.status(204).end(); // No Content
  } catch (error) {
    next(error);
  }
};

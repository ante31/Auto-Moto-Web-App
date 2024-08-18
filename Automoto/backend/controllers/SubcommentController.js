const subcommentService = require('../services/SubcommentService');

exports.getSubcomments = async (req, res, next) => {
  try {
    const subcomments = await subcommentService.getAllSubcomments();
    res.json(subcomments);
  } catch (error) {
    next(error);
  }
};

exports.getSubcommentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subcomment = await subcommentService.getSubcommentById(id);
    res.json(subcomment);
  } catch (error) {
    next(error);
  }
};

exports.createSubcomment = async (req, res, next) => {
  try {
    const subcomment = await subcommentService.createSubcomment(req.body);
    res.status(201).json(subcomment);
  } catch (error) {
    next(error);
  }
};

exports.updateSubcomment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedSubcomment = await subcommentService.updateSubcomment(id, req.body);
    res.json(updatedSubcomment);
  } catch (error) {
    next(error);
  }
};

exports.deleteSubcomment = async (req, res, next) => {
  try {
    const { id } = req.params;
    await subcommentService.deleteSubcomment(id);
    res.status(204).end(); // No Content
  } catch (error) {
    next(error);
  }
};

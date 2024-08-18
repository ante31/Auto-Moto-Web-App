const tagService = require('../services/TagService');

exports.getTags = async (req, res, next) => {
  try {
    const tags = await tagService.getAllTags();
    res.json(tags);
  } catch (error) {
    next(error);
  }
};

exports.getTagById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await tagService.getTagById(id);
    res.json(tag);
  } catch (error) {
    next(error);
  }
};

exports.createTag = async (req, res, next) => {
  try {
    const tag = await tagService.createTag(req.body);
    res.status(201).json(tag);
  } catch (error) {
    next(error);
  }
};

exports.updateTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTag = await tagService.updateTag(id, req.body);
    res.json(updatedTag);
  } catch (error) {
    next(error);
  }
};

exports.deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tagService.deleteTag(id);
    res.status(204).end(); // No Content
  } catch (error) {
    next(error);
  }
};

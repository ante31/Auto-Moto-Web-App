const likeService = require('../services/LikeService');

exports.getLikes = async (req, res, next) => {
  try {
    const likes = await likeService.getAllLikes();
    res.json(likes);
  } catch (error) {
    next(error);
  }
};

exports.getLikeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const like = await likeService.getLikeById(id);
    res.json(like);
  } catch (error) {
    next(error);
  }
};

exports.createLike = async (req, res, next) => {
  try {
    const like = await likeService.createLike(req.body);
    res.status(201).json(like);
  } catch (error) {
    next(error);
  }
};

exports.updateLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedLike = await likeService.updateLike(id, req.body);
    res.json(updatedLike);
  } catch (error) {
    next(error);
  }
};

exports.deleteLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    await likeService.deleteLike(id);
    res.status(204).end(); // No Content
  } catch (error) {
    next(error);
  }
};

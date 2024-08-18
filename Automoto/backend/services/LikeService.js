const Like = require('../models/LikeModel');

// Get all likes
exports.getAllLikes = async () => {
  try {
    return await Like.findAll();
  } catch (error) {
    console.error("Error fetching all likes:", error);
    throw error;
  }
};

// Get a like by ID
exports.getLikeById = async (id) => {
  try {
    const like = await Like.findByPk(id);
    if (!like) {
      throw new Error(`Like with ID ${id} not found`);
    }
    return like;
  } catch (error) {
    console.error(`Error fetching like with ID ${id}:`, error);
    throw error;
  }
};

// Create a new like
exports.createLike = async (likeData) => {
  try {
    const like = await Like.create(likeData);
    return like;
  } catch (error) {
    console.error("Error creating like:", error);
    throw error;
  }
};

// Update a like by ID
exports.updateLike = async (id, likeData) => {
  try {
    const like = await Like.findByPk(id);
    if (!like) {
      throw new Error(`Like with ID ${id} not found`);
    }
    await like.update(likeData);
    return like;
  } catch (error) {
    console.error(`Error updating like with ID ${id}:`, error);
    throw error;
  }
};

// Delete a like by ID
exports.deleteLike = async (id) => {
  try {
    const like = await Like.findByPk(id);
    if (!like) {
      throw new Error(`Like with ID ${id} not found`);
    }
    await like.destroy();
    return { message: `Like with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting like with ID ${id}:`, error);
    throw error;
  }
};

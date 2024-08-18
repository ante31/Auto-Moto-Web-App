const Comment = require('../models/CommentModel');

// Get all comments
exports.getAllComments = async () => {
  try {
    return await Comment.findAll();
  } catch (error) {
    console.error("Error fetching all comments:", error);
    throw error;
  }
};

// Get a comment by ID
exports.getCommentById = async (id) => {
  try {
    const comment = await Comment.findByPk(id);
    if (!comment) {
      throw new Error(`Comment with ID ${id} not found`);
    }
    return comment;
  } catch (error) {
    console.error(`Error fetching comment with ID ${id}:`, error);
    throw error;
  }
};

// Create a new comment
exports.createComment = async (commentData) => {
  try {
    const comment = await Comment.create(commentData);
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};

// Update a comment by ID
exports.updateComment = async (id, commentData) => {
  try {
    const comment = await Comment.findByPk(id);
    if (!comment) {
      throw new Error(`Comment with ID ${id} not found`);
    }
    await comment.update(commentData);
    return comment;
  } catch (error) {
    console.error(`Error updating comment with ID ${id}:`, error);
    throw error;
  }
};

// Delete a comment by ID
exports.deleteComment = async (id) => {
  try {
    const comment = await Comment.findByPk(id);
    if (!comment) {
      throw new Error(`Comment with ID ${id} not found`);
    }
    await comment.destroy();
    return { message: `Comment with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting comment with ID ${id}:`, error);
    throw error;
  }
};

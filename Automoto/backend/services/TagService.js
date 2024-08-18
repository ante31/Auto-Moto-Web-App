const Tag = require('../models/TagModel');

// Get all tags
exports.getAllTags = async () => {
  try {
    return await Tag.findAll();
  } catch (error) {
    console.error("Error fetching all tags:", error);
    throw error;
  }
};

// Get a tag by ID
exports.getTagById = async (id) => {
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      throw new Error(`Tag with ID ${id} not found`);
    }
    return tag;
  } catch (error) {
    console.error(`Error fetching tag with ID ${id}:`, error);
    throw error;
  }
};

// Create a new tag
exports.createTag = async (tagData) => {
  try {
    const tag = await Tag.create(tagData);
    return tag;
  } catch (error) {
    console.error("Error creating tag:", error);
    throw error;
  }
};

// Update a tag by ID
exports.updateTag = async (id, tagData) => {
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      throw new Error(`Tag with ID ${id} not found`);
    }
    await tag.update(tagData);
    return tag;
  } catch (error) {
    console.error(`Error updating tag with ID ${id}:`, error);
    throw error;
  }
};

// Delete a tag by ID
exports.deleteTag = async (id) => {
  try {
    const tag = await Tag.findByPk(id);
    if (!tag) {
      throw new Error(`Tag with ID ${id} not found`);
    }
    await tag.destroy();
    return { message: `Tag with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting tag with ID ${id}:`, error);
    throw error;
  }
};

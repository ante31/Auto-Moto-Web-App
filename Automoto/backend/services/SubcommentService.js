const Subcomment = require('../models/SubcommentModel');

// Get all subcomments
exports.getAllSubcomments = async () => {
  try {
    return await Subcomment.findAll();
  } catch (error) {
    console.error("Error fetching all subcomments:", error);
    throw error;
  }
};

// Get a subcomment by ID
exports.getSubcommentById = async (id) => {
  try {
    const subcomment = await Subcomment.findByPk(id);
    if (!subcomment) {
      throw new Error(`Subcomment with ID ${id} not found`);
    }
    return subcomment;
  } catch (error) {
    console.error(`Error fetching subcomment with ID ${id}:`, error);
    throw error;
  }
};

// Create a new subcomment
exports.createSubcomment = async (subcommentData) => {
  try {
    const subcomment = await Subcomment.create(subcommentData);
    return subcomment;
  } catch (error) {
    console.error("Error creating subcomment:", error);
    throw error;
  }
};

// Update a subcomment by ID
exports.updateSubcomment = async (id, subcommentData) => {
  try {
    const subcomment = await Subcomment.findByPk(id);
    if (!subcomment) {
      throw new Error(`Subcomment with ID ${id} not found`);
    }
    await subcomment.update(subcommentData);
    return subcomment;
  } catch (error) {
    console.error(`Error updating subcomment with ID ${id}:`, error);
    throw error;
  }
};

// Delete a subcomment by ID
exports.deleteSubcomment = async (id) => {
  try {
    const subcomment = await Subcomment.findByPk(id);
    if (!subcomment) {
      throw new Error(`Subcomment with ID ${id} not found`);
    }
    await subcomment.destroy();
    return { message: `Subcomment with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting subcomment with ID ${id}:`, error);
    throw error;
  }
};

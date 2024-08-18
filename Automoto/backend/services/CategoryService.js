const Category = require('../models/CategoryModel');

// Get all categories
exports.getAllCategories = async () => {
  try {
    return await Category.findAll();
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};

// Get a category by ID
exports.getCategoryById = async (id) => {
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error(`Category with ID ${id} not found`);
    }
    return category;
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};

// Create a new category
exports.createCategory = async (categoryData) => {
  try {
    const category = await Category.create(categoryData);
    return category;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

// Update a category by ID
exports.updateCategory = async (id, categoryData) => {
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error(`Category with ID ${id} not found`);
    }
    await category.update(categoryData);
    return category;
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error);
    throw error;
  }
};

// Delete a category by ID
exports.deleteCategory = async (id) => {
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error(`Category with ID ${id} not found`);
    }
    await category.destroy();
    return { message: `Category with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
};

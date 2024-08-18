const User = require('../models/UserModel'); // Correct import for default export

// Get all users
exports.getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

// Get a user by ID
exports.getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

// Create a new user
exports.createUser = async (userData) => {
  try {
    console.log("Creating user with data:", userData);
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    console.error("Sequelize Error Details:", error.message, error.errors, error.stack);
    throw error; // Re-throw after logging
  }
};

// Update a user by ID
exports.updateUser = async (id, userData) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    await user.update(userData);
    return user;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    console.error("Sequelize Error Details:", error.message, error.errors, error.stack);
    throw error; // Re-throw after logging
  }
};

// Delete a user by ID
exports.deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    await user.destroy();
    return { message: `User with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw error;
  }
};

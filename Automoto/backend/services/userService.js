const { User } = require('../models/UserModel');

exports.getAllUsers = async () => {
  return await User.findAll();
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

// Other user-related service functions...

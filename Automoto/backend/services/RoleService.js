const Role = require('../models/RoleModel');

// Get all roles
exports.getAllRoles = async () => {
  try {
    return await Role.findAll();
  } catch (error) {
    console.error("Error fetching all roles:", error);
    throw error;
  }
};

// Get a role by ID
exports.getRoleById = async (id) => {
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      throw new Error(`Role with ID ${id} not found`);
    }
    return role;
  } catch (error) {
    console.error(`Error fetching role with ID ${id}:`, error);
    throw error;
  }
};

// Create a new role
exports.createRole = async (roleData) => {
  try {
    const role = await Role.create(roleData);
    return role;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
};

// Update a role by ID
exports.updateRole = async (id, roleData) => {
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      throw new Error(`Role with ID ${id} not found`);
    }
    await role.update(roleData);
    return role;
  } catch (error) {
    console.error(`Error updating role with ID ${id}:`, error);
    throw error;
  }
};

// Delete a role by ID
exports.deleteRole = async (id) => {
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      throw new Error(`Role with ID ${id} not found`);
    }
    await role.destroy();
    return { message: `Role with ID ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting role with ID ${id}:`, error);
    throw error;
  }
};

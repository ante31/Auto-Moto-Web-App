const roleService = require('../services/RoleService');

exports.getRoles = async (req, res, next) => {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (error) {
    next(error);
  }
};

exports.getRoleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const role = await roleService.getRoleById(id);
    res.json(role);
  } catch (error) {
    next(error);
  }
};

exports.createRole = async (req, res, next) => {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    next(error);
  }
};

exports.updateRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedRole = await roleService.updateRole(id, req.body);
    res.json(updatedRole);
  } catch (error) {
    next(error);
  }
};

exports.deleteRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    await roleService.deleteRole(id);
    res.status(204).end(); // No Content
  } catch (error) {
    next(error);
  }
};

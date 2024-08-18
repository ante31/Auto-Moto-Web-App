const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RoleController');

// Route to get all roles
router.get('/find/all', roleController.getRoles);

// Route to get a specific role by ID
router.get('/find/:id', roleController.getRoleById);

// Route to create a new role
router.post('/add', roleController.createRole);

// Route to update an existing role by ID
router.put('/update/:id', roleController.updateRole);

// Route to delete a role by ID
router.delete('/delete/:id', roleController.deleteRole);

module.exports = router;

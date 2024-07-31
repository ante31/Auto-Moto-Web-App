const { DataTypes } = require('sequelize');
const db = require('./index');

const Role = db.sequelize.define('Role', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Role;

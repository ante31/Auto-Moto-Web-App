const { DataTypes } = require('sequelize');
const db = require('./index');

const Category = db.sequelize.define('Category', {
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

module.exports = Category;

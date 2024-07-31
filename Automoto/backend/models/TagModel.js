const { DataTypes } = require('sequelize');
const db = require('./index');

const Tag = db.sequelize.define('Tag', {
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

module.exports = Tag;

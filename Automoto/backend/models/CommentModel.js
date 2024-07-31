const { DataTypes } = require('sequelize');
const db = require('./index');
const User = require('./UserModel');

const Comment = db.sequelize.define('Comment', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: User,
            key: 'id',
        },
    },
    
});

module.exports = Comment;

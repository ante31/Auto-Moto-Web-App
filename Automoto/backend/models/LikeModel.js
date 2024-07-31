const { DataTypes } = require('sequelize');
const db = require('./index');
const User = require('./UserModel');
const Comment = require('./CommentModel');

const Like = db.sequelize.define('Like', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    feedback: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    comment_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Comment,
            key: 'id',
        },
    },
    
});

module.exports = Like;

const { DataTypes } = require('sequelize');
const db = require('./index');
const Comment = require('./CommentModel');
const User = require('./UserModel');

const Subcomment = db.sequelize.define('Subcomment', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    content: {
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

module.exports = Subcomment;

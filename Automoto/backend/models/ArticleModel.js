const { DataTypes } = require('sequelize');
const db = require('./index');
const Category = require('./CategoryModel');

const Article = db.sequelize.define('Article', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: Category,
            key: 'id',
        },
    },
});

module.exports = Article;

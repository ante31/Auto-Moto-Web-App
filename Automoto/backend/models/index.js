const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('automoto', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('crm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = db;
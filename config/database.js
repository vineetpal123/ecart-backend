const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize(
    'sql12298507',
    'sql12298507',
    '', {
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql',
    'port': '3306',
    'password': 'QQaryBkYv4',
    
});



module.exports = db;
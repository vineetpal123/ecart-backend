const Sequelize = require('sequelize');
//Database
const db = require('../config/database.js'); 

// User model
const User = db.define('vin_course', { 
  title: {
    type: Sequelize.STRING
  },
  meta: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  }
})



module.exports = User;
const Sequelize = require('sequelize');
//Database
const db = require('../config/database.js'); 

// User model
const User = db.define('vin_users', {
  email: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  }
})



module.exports = User;
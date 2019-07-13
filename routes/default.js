var express = require('express');
var router     = express.Router()

var defaultroute = require('../controllers/default');
var Default = new defaultroute()

//router.get('/', Default.get)
//router.get('/health', Default.health)
router.post('/api/register', Default.register)
router.post('/api/login', Default.login)



module.exports = router;
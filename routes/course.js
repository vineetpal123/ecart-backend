var express = require('express');
var router     = express.Router()

var User = require('../controllers/course');

router.get('/api/course', User.get)

router.post('/api/course', User.add)


module.exports = router;
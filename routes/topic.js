var express = require('express');
var router     = express.Router()

var Topic = require('../controllers/topic');

router.get('/api/topic/:id', Topic.get)

router.post('/api/topic', Topic.add)

router.put('/api/topic', Topic.update)

router.put('/api/topic/delete', Topic.delete)



module.exports = router;
var express = require('express');
var router     = express.Router()

var User = require('../controllers/user');

router.get('/api/user', User.get)

router.post('/api/user', User.add)
//router.put('/api/user', User.update)
//router.delete('/api/user', User.delete)


//router.post('/register', UserCtrl.register)


//router.post('/register', UserCtrl.register)

//router.get('/:pageIndex/:pageSize', UserCtrl.get)
//router.get('/:id', UserCtrl.getById)

//router.post('/', UserCtrl.save)
//router.delete('/:id', UserCtrl.delete)

module.exports = router;
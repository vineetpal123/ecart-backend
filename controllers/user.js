const models = require('../models/User')


module.exports = {        
    
    get: function(req, res){
        
        models.findAll().then(users => {res.json(users)})      
    },

    add: function(req, res){        
        models.create(req.body)
        .then(users => res.json(users))
    },

    update: function(req, res){        
        console.log('update')
    },

    delete: function(req, res){        
        console.log('delete')
    }

};


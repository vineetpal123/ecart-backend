const models = require('../models/Topic')


module.exports = {        
    
    get: function(req, res){
        
        condition = {}
        
        condition['courseId'] = req.params.id
        if (req.query['id']){
            condition['id'] = req.query.id
        }

        if (req.query['filter']){
            condition['imp'] = req.query['filter']
        }

        condition['status'] = 1

        
        models.findAll({
            where: condition,
            order: [
                ['imp', 'DESC']
            ],
          
        }).then(users => {res.json(users)})      
    },

    add: function(req, res){  
        console.log('add');      
        models.create(req.body)
        .then(users => res.json(users))
    },

    update: function(req, res){      
        condition = {}
        //console.log(req.body.updateId)
        condition['id'] = req.body.updateId
        //console.log(req)
        models.update(req.body,{
            where: condition
          
        }).then(users => {res.json(users)})
    },

    delete: function(req, res){        
        
        condition = {}
        
        condition['id'] = req.body.updateId
        
        models.update(req.body,{
            where: condition
          
        }).then(users => {res.json(users)})
    }

};


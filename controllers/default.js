const models = require('../models/User')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken');
// person.js
'use strict';

module.exports = class Default {  
	

	register(req, res) {
		models.findAll({
			where: {
			  email:  req.body.data[0].email			  
			}
		})
		.then(
			users => {
				
				if (users.length){
					res.send('Already exist')
					return false
				}

				let data = req.body.data[0]
		
		let saltRounds = 2
		
	    bcrypt.hash(data.password, saltRounds).then(function(hash) {
			data.password = hash
			models.create(data)
			.then(data => {
				res.send("Successfully created")
			})
			.catch(err => {
				res.json('error: '+error )
			})	
		});
				
			}
			
		)
		
		
	}

	login(req, res){
		
		let email = req.body.data[0].email
		let password = req.body.data[0].password

		models.findOne({
			where: {
				email:  req.body.data[0].email	
			}
		}).then(
			user => { 
				let hash= user.password
				bcrypt.compare(password, hash).then(function(valid) {
					if (valid){
						var payload = {
							email: email,
							iat:  Math.floor(Date.now() / 1000) - 30							
						}
						let privateKEY = 'seshhhhhcret'
						var token = jwt.sign(payload, privateKEY);

						var data = {
							"code": "200",
							"message": "Logged in Successfully!",
							"data": [
								{
									"token": token
								}
							]
						}


						res.json(data)
					}

					res.send('Invalid email or password')
				});
				
			} 
		).catch(
			err => res.json(error)
			)
		
		
		
	}
}



var User = require('../models/user.model.js');

var db_conection = require('../config/db.js');
exports.getall = (req,res) => { 
	db_conection.query("SELECT * FROM customers", function (err, result, fields) {
	if (err) throw err;
		let data = {'status':200, 'message':'user created successfully', 'data':result};
		res.send(data);
	});	
};

exports.createUser = (req, res) => {
	console.log("start");
	var new_user = new User(req.body);	
	 if(!new_user.email) {
		res.status(400).send({ error:true, message: 'Please provide name/email' });
	}
	User.createUser(new_user, function(err, user) {
		if (err) {
			res.send(err);
		}
		if(user.length > 0){  			
			res.json({ type: 'error', 'status': 200, message: 'email already exsist' });	
		} else {	
			res.json({ type: 'success', 'status': 201, message: 'user created successfully' });
		}
	});
};


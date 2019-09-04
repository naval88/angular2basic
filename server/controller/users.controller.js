var User = require('../models/user.model.js');
var db_conection = require('../config/db.js');
const jwt = require('jsonwebtoken');
const jwtKey = 'qwerty6789';
const jwtExpirySeconds = 300

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

exports.listUser = (req,res) => {
	 User.listUser(function(err, user) {
		if (err) {
			res.send(err);
		}
		let data = {'status':200,'data':user};
		res.send(data);
	});
};

exports.updateUser = (req, res) => {
	User.updateUserById(req.params.userId, req.body ,function(err, user) {
		if (err) {
			res.send(err);
		}
		let data = {'status':200, 'message':"user has been updated successfully"};
		res.send(data);
	});

};

exports.deleteUser = (req, res) => {
	User.remvoeUser(req.params.userId,function(err, user) {
		if (err) {
			res.send(err);
		}
		let data = {'status':200, 'message':"user has been deleted successfully"};
		res.send(data);
	});
};

exports.signIn = (req,res) => {
	let get_user = (req.body);
	let error = false;
	let data = [];
	let count = 0;
	if(!get_user.email) {
		data[count] = ['Email field is empty'];
		error = true;
		count++;
	}

	if(!get_user.password) {
		data[count] = ['Password field is empty'];			
		error = true;			
	}

	if(error == true) {
		console.log("errors");
		res.status(400).send({ error:true, data: data  });
	}

	User.checkLogin(get_user,function(err, user) {
		if (err) {
			res.send(err);
		}
		if(user.length > 0) {
			const token = jwt.sign({ data: user }, jwtKey, {
				algorithm: 'HS256',
				expiresIn: jwtExpirySeconds
			})
			let data = {'status':200,'type':'success','message':"user sign in successfully",'_token':token};
			res.send(data).end();
		} else {
			let data = {'status':204,'type':'error', 'message':"Email and password did not match"};
			res.send(data).end();
		}		
		
	});
};	


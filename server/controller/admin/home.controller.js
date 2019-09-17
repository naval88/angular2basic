var User = require('../../models/user.model.js');

exports.showHome = (req,res) => {	
	res.render('admin/home');
};

exports.getManagers = (req,res) => {
	User.listUser(function(err, user) {
		if (err) {
			res.send(err);
		}
		let data = {'data':user};
		res.render('admin/user.ejs',data);
	});			
};

exports.saveManager = (req, res) => {	
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
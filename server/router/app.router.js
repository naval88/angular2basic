module.exports = function(app) {
	const user = require('../controller/users.controller.js');
	app.get('/', user.listUser);	
	app.get('/users', user.listUser);
	app.post('/sign-up', user.createUser);
	app.put('/users/:userId', user.updateUser);
	app.delete('/users/:userId', user.deleteUser);
}
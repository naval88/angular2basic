module.exports = function(app) {
	const user = require('../controller/users.controller.js');
	const post = require('../controller/posts.controller.js');
	app.get('/', user.listUser);	
	app.get('/users', user.listUser);
	app.post('/sign-up', user.createUser);
	app.put('/users/:userId', user.updateUser);
	app.delete('/users/:userId', user.deleteUser);
	app.post('/sign-in', user.signIn);
	app.post('/posts', post.createPost);
	app.get('/posts', post.listPost);
}
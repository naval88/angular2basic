module.exports = function(app) {
	const customers_contorller = require('../controller/customers.controller.js');
	const user = require('../controller/users.controller.js');

	app.get('/', user.getall);
	app.post('/customers', customers_contorller.createCustomer);	
	app.post('/sign-up', user.createUser);
}
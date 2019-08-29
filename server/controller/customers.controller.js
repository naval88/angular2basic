var Customer = require('../models/customers.model.js');
//https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
exports.createCustomer = function(req, res) {
	var new_customer = new Customer(req.body);

  //handles null error 
  if(!new_customer.name || !new_customer.address){

  	res.status(400).send({ error:true, message: 'Please provide name/address' });

  }
  else{

  	Customer.createCustomer(new_customer, function(err, customer) {

  		if (err)
  			res.send(err);
  			res.status(201).send({ type: 'success', message: 'customer created successfully' });
  	});
  }
};


var mysql = require('mysql');
var env = require('./env.js');
console.log(env.db_host);
//local mysql db connection
var connection = mysql.createConnection({
    host     :  env.db_host,
    user     :  env.db_user_name,
    password :  env.db_password,
    database :  env.db_name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
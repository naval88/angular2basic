var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'node_angular_basic'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
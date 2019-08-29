'user strict';
var sql = require('../config/db.js');


var User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.created_at = new Date();
    this.updated_at = new Date();
};

User.createUser = function (newUser, result) {   
    sql.query("Select email from users where email = ? ", newUser.email,
    function(err , data) {
        if(data.length > 0){  
            console.log("email already exsist");
            result(null, data);
        } 
        else {
                sql.query("INSERT INTO users set ?", newUser, function (err, insert_data) {                
                if(err) {
                    result(err, null);
                }
                else {
                    result(null, insert_data);
                }
            })
        }           
    })
};

module.exports = User;
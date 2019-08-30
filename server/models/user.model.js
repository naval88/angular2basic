'user strict';
var sql = require('../config/db.js');
var md5 = require('md5');

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

User.listUser = function (result) {   
    sql.query("Select * from users",
    function(err , data) {              
        if(err) {
            result(err, null);
        }
        else {
            result(null, data);
        }
    })
};      

User.updateUserById = function (userId, userData, result) {
    console.log(userData.name);
    console.log(userId);
     sql.query("update users set ? where id = ? ",[userData, userId], function(err , data) {              
        if(err) {
            result(err, null);
        }
        else {
            result(null, data);
        }
    })
}

User.remvoeUser = function (userId, result) {   
    sql.query("Delete from users where id = ? ",userId ,
    function(err , result) {              
        if(err) {
            result(err, null);
        }
        else {
            result(null, result);
        }
    })
};       

module.exports = User;



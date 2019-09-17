'user strict';
var sql = require('../config/db.js');
var md5 = require('md5');
//https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
var User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.password = md5(user.password ? user.password : '123456');
    this.user_type = user.user_type;
    this.created_at = new Date();
    this.updated_at = new Date();
};

User.createUser = function (newUser, result) {   
    sql.query("Select email from users where email = ? ", newUser.email,
    function(err , data) {
        console.log(data);
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
            });
        }           
    })
};

User.listUser = function (result) {   
    sql.query("Select * from users where user_type!=1 order by id desc",
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
    function(err , result_data) {              
        if(err) {
            result(err, null);
        }
        else {
            result(null, result_data);
        }
    })
};       

User.checkLogin = function (userData, result)
{
    let email = userData.email;
    let pwd = md5(userData.password);
    let query = sql.query("select id,name from users where email = ?  and password = ? ",[email , pwd ],
    function(err , users_data) {         
        if(err) {
            result(err, null);
        }
        else {
            result(null, users_data);
        }
    });
};

module.exports = User;



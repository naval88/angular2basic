'user strict';
var sql = require('../config/db.js');
var md5 = require('md5');
//https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
var Friend = function(friend){
    this.user_id = friend.user_id;
    this.friend_id = friend.friend_id;
    this.created_at = new Date();
    this.updated_at = new Date();
};



Friend.getFriends =  function (user_id, result) {   
	$query = "select id, name, email from users as u join"
			+" (select friend_id from friends where user_id = ?"
			+" union select user_id from friends where friend_id = ?) as fr"
			+" on u.id = fr.friend_id";
    sql.query($query,[user_id, user_id], function(err , data) {              
        if(err) {
            result(err, null);
        }
        else {
            result(null, data);
        }
    });
};



module.exports = Friend;



// raw querey 
//select friend_id from friends where user_id = 10
//union select user_id from friends where friend_id = 10

//select id, name, email from users as u join (select friend_id from friends where user_id = 10
//union select user_id from friends where friend_id = 10) as fr on u.id = fr.friend_id


// 10 is user id having friend 18 21 20
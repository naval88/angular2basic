var sql = require('../config/db.js');
var Messages = function(message){
    this.sender_id = message.sender_id;
    this.reciever_id = message.reciever_id;
    this.message  = message.message ;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Messages.getUserMessage =  function (sender_id,reciever_id, result) {   
	let query = "select * from messages where "
    +"((sender_id = ? &&  reciever_id = ?) || "
    +"(sender_id = ? &&  reciever_id = ?)) order by id asc";
    let q1 = sql.query(query,[sender_id, reciever_id, reciever_id, sender_id], function(err , data) {              
        if(err) {
            result(err, null);
        }
        else {
            result(null, data);
        }
    });	
      console.log(q1.sql);
};

module.exports = Messages;



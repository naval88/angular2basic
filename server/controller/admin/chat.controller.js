var Chat = require('../../models/chat.model.js');
var Messages = require('../../models/message.model.js');

exports.showChatBox = (req,res) => {
	let user_id = req.session.userid;
	Chat.getFriends(user_id, function (err, data){
		if (err) {
			res.send(err);
		}
		console.log(data);
		if(data.length > 0){  			
			res.render("admin/chat", {data:data,
										username:req.session.username,
										user_id:user_id});			
		} else {	
			res.render("admin/chat",{data:data});	
		}
	});		
};

//getMessages as per user id
exports.getMessages = (req, res) => {	
	let user_id = req.session.userid;
	let friend_id = req.params.userId ?  req.params.userId : 18;
	Messages.getUserMessage(user_id, friend_id,  function (err, data){
		if (err) {
			res.send(err);
		}
		res.json({ type: 'success',
					'status': 201, 
					data: data  });
		res.end("data revieved");
	});
};


//select * from messages where ((sender_id = 10 &&  reciever_id = 18) || (sender_id = 18 &&  reciever_id = 10)) order by id desc


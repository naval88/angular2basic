var Post = require('../models/posts.model.js');
var db_conection = require('../config/db.js');
var fs = require('fs');
const folder_name = "./upload/";
exports.createPost = (req,res_main) => {
	var new_post = new Post(req.body);	
	let img_data = new_post.image;
	let data = img_data.replace(/^data:image\/\w+;base64,/, "");
	const type = img_data.substring(img_data.indexOf('/') + 1, img_data.indexOf(';base64'));
	let new_image_name = new Date().getTime()+"."+type;
	new_post.image = new_image_name;
	new_post.author_id = 2;
	fs.writeFile(folder_name + new_image_name, data, 'base64', (err, res) => {
	   if (err) {
	     console.log(err);
	   } else {
		Post.savePost(new_post, function (err,post) {
			if(post) {
				let send_data = {"status":201, "type":"success", 'message':'post created successfully'}
				res_main.json(send_data);
				res_main.end();
			}
		});
	   }
	});
};

exports.listPost = (req,res) => {
	Post.fetchAll(function (err,post){
		if(post) {
			res.json({"status":200, "type":"success", 'data':post, 'message':'post fetched successfully'});
			res.end();
		}

	});

};
	














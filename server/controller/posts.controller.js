var Post = require('../models/posts.model.js');
const env = require('../config/env.js');
const Mail = require('../mail/mail.js');
var db_conection = require('../config/db.js');
var fs = require('fs');
const folder_name = "./upload/";
const jwt = require('jsonwebtoken');
const jwtKey = env.jwt_key;
const jwtExpirySeconds = env.jwt_expiry_time;
const fetch = require("node-fetch");

exports.createPost = (req,res_main) => {
	var new_post = new Post(req.body);	
	let bearer = req.headers.authorization;
	if(typeof bearer !== 'undefined') {
		let token = req.headers.authorization.split(" ")[1];
		//let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjpbeyJpZCI6MSwibmFtZSI6ImFkbWluIn1dLCJpYXQiOjE1Njc3NDk2MjEsImV4cCI6MTU2Nzc0OTkyMX0.GXL0-o3PA8BgnxbTCBmALMGwl0pCsvPhpoypS03J188";
		jwt.verify(token, jwtKey, function (err, decoded){
            if (err){
                console.log(err);
                console.log(err.name);
                req.authenticated = false;
                req.decoded = null;
            } else {               
				let img_data = new_post.image;
				let data = img_data.replace(/^data:image\/\w+;base64,/, "");
				const type = img_data.substring(img_data.indexOf('/') + 1, img_data.indexOf(';base64'));
				let new_image_name = new Date().getTime()+"."+type;
				new_post.image = new_image_name;
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
            }
        });
	} else {
		let send_data = {"status":400, "type":"error", 'message':'Please send token'}
		res_main.json(send_data);
		res_main.end();
	}
	
};

exports.listPost = (req,res) => {
	Post.fetchAll(function (err,post) {
		if(post) {
			res.json({"status":200, "type":"success", 'data':post, 'message':'post fetched successfully'});
			res.end();
		}
	});
};

exports.listPostAsPerPage = (req,res) => {
	Post.fetchAsPerPage(req.params.limitId, function (err,post) {
		if(post) {
			res.json({"status":200, "type":"success", 'data':post, 'message':'post fetched successfully'});
			res.end();
		}
	});
};

exports.addRating = (req, res) => {
	Post.saveRating(req.body,function(err, rating) {
		if(rating) {
			res.json({"status":200, "type":"success", 'message':'rating added successfully'});
			res.end();
		}
	});
};

exports.popularPosts = (req, res) => {
	Post.fetchPopluarPosts(function (err,popularPost){
		if(popularPost) {
			res.json({"status":200, 
						"type":"success", 
						'message':'popular post fetch successfully',
						"data":popularPost
					});
			res.end();	
		}
	});
};

async function toAssignKeyToArray(keyToAssign, result) {
	let outputAsResult = [];
	let assignedKey;
	for(let i = 0; i < result.length; i++) {
		assignedKey = keyToAssign[i];
		outputAsResult[assignedKey] =  result[i];
	}	
	return outputAsResult;
}

exports.getTwoTableData = (req, res) => {
	Promise.race([Post.userPromise, Post.userPostsPromise, Post.promise3])
	.then(results => {	
		//console.log(results);
		//let json_result = result;
		//let keyToAssign = ['users', 'posts', 'user_name'];
		//let dataResult  = toAssignKeyToArray(keyToAssign, JSON.parse(JSON.stringify(result)));
		//console.log(dataResult);
	    res.json({ 
	    			"status":200,
	    			"data": results
	    		});
		//res.end("dataResult");
		//res.end(results);
	  });
};

function myFunction(user) {
	console.log("test1");
	console.log(user.name);
	console.log("test2");
}

exports.showData = (req, res) => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(result => result.json())
	.then(result => {
	    result.map(myFunction);
	    console.log("end");
	    res.end("data completed");
	});
};
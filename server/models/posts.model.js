'user strict';
var sql = require('../config/db.js');
const env = require('../config/env.js');
const post_offset = env.post_offset;

var Post = function(post){    
    this.author_id = post.author_id;
    this.title = post.title;
    this.description = post.description;
    this.image = post.image;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Post.savePost = function (newPost, result) {   
    sql.query("INSERT INTO posts set ?", newPost, function (err, insert_data) {                
            if(err) {
                console.log(err);
                result(err, null);
            }
            else {
                result(null, insert_data);
            }
    });
};

Post.fetchAll = function (result) {       
	let query = "select (select name from users where id=author_id) as name,"
				+" title, description, image, created_at from posts order by id desc";

    sql.query(query,function (err, data) {            
            if(err) {
                result(err, null);
            } else {
                result(null, data);
            }
    });
};

Post.fetchAsPerPage = function (limit, result) {   
    //console.log("here"+limit);
    let offset = post_offset*limit;
    let limit_data = 0;    
    /*let query = "select (select name from users where id=author_id) as name,"
                +" (select avg(rating) from post_ratings"
                +" group by post_id having post_id = p.id ) as rating,"
                +" title, description, image, created_at"
                +" from posts as p order by p.id desc limit ? , ?";  */
    let query = "select * from user_name_post_ratings limit ? , ?";
    let query_sql = sql.query(query, [limit_data, offset], function (err, data) {   
            if(err) {
                result(err, null);
            }
            else {
                result(null, data);
            }
    });
    //console.log(query_sql.sql);
};

Post.fetchPopluarPosts = function (result) {
    let query = "select * from user_name_post_ratings order by rating desc limit ? , ?";
    let query_sql = sql.query(query,[0 ,3], function (err, data) {   
        if(err) {
            result(err, null);
            return;
        }
        else {
            result(null, data);
        }
    });    
};

Post.userPromise = new Promise(function(result, err) {
    let userQuery = "select * from users";
    let finalQuery = sql.query(userQuery, function (err, data) {   
        if(err) {
            result(err, null);
            //return;
        }
        else {
            result(data);
        }
    });
    console.log(finalQuery.sql);
});

Post.userPostsPromise = new Promise(function(result, err) {
    let userQuery = "select * from posts";
    sql.query(userQuery, function (err, data) {   
        if(err) {
            result(err, null);
            //return;
        }
        else {
            result(data);
        }
    });
});

Post.promise3 = "naval kishor"; 

module.exports = Post;
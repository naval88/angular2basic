'user strict';
var sql = require('../config/db.js');
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
    sql.query(query, function (err, data) {     
    console.log           
            if(err) {
                result(err, null);
            }
            else {
                result(null, data);
            }
    });
};

module.exports = Post;
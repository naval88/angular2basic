'user strict';
var sql = require('../config/db.js');
var Post_Rating = function(post_rating){    
    this.post_id = post_rating.post_id;
    this.rating = post_rating.rating;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Post_Rating.saveRating = function (newPost, result) {   
    sql.query("INSERT INTO post_ratings set ?", newPost, function (err, insert_data) {                
            if(err) {
                console.log(err);
                result(err, null);
            }
            else {
                result(null, insert_data);
            }
    });
};

Post_Rating.fetchAll = function (result) {   
    
	let query = "select * from user_name_post_ratings";				
    sql.query(query,function (err, data) {            
            if(err) {
                result(err, null);
            }
            else {
                result(null, data);
            }
    });
};

module.exports = Post_Rating;
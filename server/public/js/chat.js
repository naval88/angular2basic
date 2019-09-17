window.addEventListener('load',function(){
	jQuery(document).ready(function($) {
		$('.msg_card_body').html('');
		let active_id = $('.contacts .active').attr('user_id');
		let active_user_img = $('.contacts .active .user_img').attr('src');
		$('.card-header .user_img').attr('src', active_user_img);
		$('.card-header .user_info .user_header_name').html($('.contacts .active .user_info span').text());
		$(".user_custome_id").text(active_id);
		getMessageBoxData(active_id);	
	});
});

$('.contacts li').click(function() {	
	$('.contacts li').removeClass('active');
	$(this).addClass('active');
	$('.card-header .user_info .user_header_name').html($('.contacts .active .user_info span').text());
	//let active_user_img = $(this+' .user_img').attr('src');
	//alert(active_user_img);
	//$('.card-header .user_img').attr('src', active_user_img);
	let active_id = $(this).attr('user_id');
	$(".user_custom_id").text(active_id);
	getMessageBoxData(active_id);
});

function getMessageBoxData(active_id) {
	$.ajax({
		url     : '/dashboard/user/message/'+active_id,
		type    : 'GET',
		dataType: 'json',
		beforeSend: function() {

		},
		success: function (response) { 
		$('.msg_card_body').html('');
		let html="";
		let i;
		console.log(response.data.length);
		if(response.data.length > 0) {
			for(i = 0; i < response.data.length; i++) {
				if(response.data[i].sender_id == active_id) {
				html +='<div class="d-flex justify-content-start mb-4">'
						+'<div class="img_cont_msg">'
							+'<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" style="width:30px;">'
						+'</div>'
						+'<div class="msg_cotainer">'
							+response.data[i].message
							+'<span class="msg_time">8:40 AM, Today</span>'
						+'</div>'
					+'</div>';	
					} else {				
				html += '<div class="d-flex justify-content-end mb-4">'
					+'<div class="msg_cotainer_send">'
						+response.data[i].message
						+'<span class="msg_time_send">8:55 AM, Today</span>'
					+'</div>'
					+'<div class="img_cont_msg">'
						+'<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg" class="rounded-circle user_img_msg">'
					+'</div>'
					+'</div>';	
				} 
			}
		} else {
			html = "Start Your conversation";
		}
		$('.msg_card_body').html(html);
		},
		error   : function ( response )
		{
			alert("error");
		},
	});
}




// append text if someone is online
/*socket.on('is_online', function(username) {
    $('#messages').append($('<li>').html(username));
});*/

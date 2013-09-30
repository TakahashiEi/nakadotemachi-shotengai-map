var facebook_logged_in = false;
var facebook_post_editting = false;

window.fbAsyncInit = function() {
	
	FB.init({
		appId : '203795143123264', //change the appId to your appId
		status : true,
		cookie : true,
		xfbml : true,
		oauth : true
	});

	function auth_facebook(response) {

		if (response.authResponse) {
			//user is already logged in and connected
			FB.api('/me', function(info) {
				facebook_login(response, info);
			});
			
		} else {
			
			//user is not connected to your app or logged out
			
		}
	}

	// run once with current status and whenever the status changes
	FB.getLoginStatus(auth_facebook);
	FB.Event.subscribe('auth.statusChange', auth_facebook);
	
};
( function() {
	var e = document.createElement('script');
	e.async = true;
	e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
	document.getElementById('fb-root').appendChild(e);
}());

function facebook_login(response, info) {
	if (response.authResponse) {
		var accessToken = response.authResponse.accessToken;
		facebook_logged_in = true;
	}
}
			
function build_facebook_checkin_post_editor(balloon){
	balloon.append(
		$('<a></a>').addClass('checkin-with-facebook').append(
			$('<img />').attr({
				src: 'images/icon-facebook.png',
				alt: ''
			})
		).append(
			$('<span></span>').text('フェイスブックでチェックイン')
		).append(
			$('<div></div>').addClass('facebook-post-editor').append(
				$('<textarea></textarea>')
			).append(
				$('<div></div>').append(
					$('<button></button>').text('チェックイン').click(function(){
						FB.api('/me/feed', 'post', {
							message : $('.facebook-post-editor textarea', balloon).val(),
							place : balloon.closest('.shop').data('facebook_id'),
							privacy : { 'value': 'EVERYONE' }
							// coordinates : {
								// 'latitude' : 40.6006096,
								// 'longitude' : 140.47384258333
							// }
					
						}, function(response) {
							facebook_post_editting = false;
							$('.facebook-post-editor').slideUp();
							if (!response || response.error) {
								alert('チェックイン中にエラーが発生しました。\n・インターネットの接続を確認してください。\n・時間をおいて再度チェックインしてください。');
							} else {
								$('.checkin-with-facebook span', balloon).animate({
									opacity: 0
								}).text('チェックインが完了しました').animate({
									opacity: 100
								})
							}
							console.log(response)
						});
					})
				).append(
					$('<button></button>').text('キャンセル').click(function(){
						facebook_post_editting = false;
						$('.facebook-post-editor').slideUp();
					})
				).addClass('meta')
			).bind('click mousedown mouseup', function(e){
				e.stopImmediatePropagation()
			})
		).click(function(){
			if(facebook_post_editting){
				facebook_post_editting = false;
				$('.facebook-post-editor').slideUp();
			}else{
				if(facebook_logged_in){
					facebook_post_editting = true;
					$('.facebook-post-editor').slideDown();
				}else{
					FB.login(function(response){
						if (response.authResponse){
							FB.api('/me', function(info){
								facebook_login(response, info);
								facebook_post_editting = true;
								$('.facebook-post-editor').slideDown();
							});
						}else{
							//user cancelled login or did not grant authorization
						}
					},{
						scope: 'publish_actions'
					});
				}
			}
		})
	)
}

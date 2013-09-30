<!DOCTYPE html>
<html xmlns:fb="https://www.facebook.com/2008/fbml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>New JavaScript SDK & OAuth 2.0 based FBConnect Tutorial | Thinkdiff.net</title>
		<!--
		@author: Mahmud Ahsan (http://mahmud.thinkdiff.net)
		-->
	</head>
	<body>
		<div id="fb-root"></div>
		<script type="text/javascript">
			var button;
			var userInfo;

			window.fbAsyncInit = function() {
				FB.init({
					appId : '203795143123264', //change the appId to your appId
					status : true,
					cookie : true,
					xfbml : true,
					oauth : true
				});

				showLoader(true);

				function updateButton(response) {
					button = document.getElementById('fb-auth');
					userInfo = document.getElementById('user-info');

					if (response.authResponse) {
						//user is already logged in and connected
						FB.api('/me', function(info) {
							login(response, info);
						});

						button.onclick = function() {
							FB.logout(function(response) {
								logout(response);
							});
						};
					} else {
						//user is not connected to your app or logged out
						button.innerHTML = 'Login';
						button.onclick = function() {
							showLoader(true);
							FB.login(function(response) {
								if (response.authResponse) {
									FB.api('/me', function(info) {
										login(response, info);
									});
								} else {
									//user cancelled login or did not grant authorization
									showLoader(false);
								}
							}, {
								scope : 'publish_actions'
							});
						}
					}
				}

				// run once with current status and whenever the status changes
				FB.getLoginStatus(updateButton);
				FB.Event.subscribe('auth.statusChange', updateButton);
			};
			( function() {
					var e = document.createElement('script');
					e.async = true;
					e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
					document.getElementById('fb-root').appendChild(e);
				}());

			function login(response, info) {
				if (response.authResponse) {
					var accessToken = response.authResponse.accessToken;

					userInfo.innerHTML = '<img src="https://graph.facebook.com/' + info.id + '/picture">' + info.name + "<br /> Your Access Token: " + accessToken;
					button.innerHTML = 'Logout';
					showLoader(false);
					document.getElementById('other').style.display = "block";
				}
			}

			function logout(response) {
				userInfo.innerHTML = "";
				document.getElementById('debug').innerHTML = "";
				document.getElementById('other').style.display = "none";
				showLoader(false);
			}

			function checkin() {
				FB.api('/me/feed', 'post', {
					message : 'MESSAGE_HERE',
					place : 150213808375785,
      				privacy : { 'value': 'EVERYONE' }
					// coordinates : {
						// 'latitude' : 40.6006096,
						// 'longitude' : 140.47384258333
					// }
				}, function(response) {
					console.log(response)
				});
			}
			
			// function show_post_details(){
// 				
			// }
			
			function showLoader(status) {
				if (status)
					document.getElementById('loader').style.display = 'block';
				else
					document.getElementById('loader').style.display = 'none';
			}

		</script>

		<h3>New JavaScript SDK & OAuth 2.0 based FBConnect Tutorial | Thinkdiff.net</h3>
		<button id="fb-auth">
			Login
		</button>
		<div id="loader" style="display:none">
			<img src="ajax-loader.gif" alt="loading" />
		</div>
		<br />
		<div id="user-info"></div>
		<br />
		<div id="debug"></div>

		<div id="other" style="display:none">
			<a href="#" onclick="checkin(); return false;">checkin</a>
			<!-- <a href="#" onclick="show_post_details(); return false;">show_post_details</a> -->

			<br />
			<textarea id="status" cols="50" rows="5">Write your status here and click 'Status Set Using Legacy Api Call'</textarea>
			<br />
		</div>
	</body>
</html>
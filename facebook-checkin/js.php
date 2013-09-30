<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>Facebookチェックイン</title>
		<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>

		<!-- <script>

		$(window).load(function(){
		FB.login(function(response) {
		if (response.authResponse) {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
		});
		} else {
		console.log('User cancelled login or did not fully authorize.');
		}
		});
		})

		</script> -->
	</head>
	<body>
		<div id="fb-root"></div>
		<script>
			window.fbAsyncInit = function() {
				FB.init({
					appId : '203795143123264', ///// ← 解説を参照 /////
					channelUrl : 'channel.html', // チャンネルファイルのパスを指定
					status : true, // check login status
					cookie : true, // enable cookies to allow the server to access the session
					xfbml : true, // parse XFBML,
                    oauth: true
				});
			};

			// Load the SDK Asynchronously
			( function(d) {
					var js, id = 'facebook-jssdk';
					if (d.getElementById(id)) {
						return;
					}
					js = d.createElement('script');
					js.id = id;
					js.async = true;
					js.src = "//connect.facebook.net/en_US/all.js";
					d.getElementsByTagName('head')[0].appendChild(js);
				}(document));

			function checkin() {
				FB.login(function(response) {
					if (response.authResponse) {
						console.log('Welcome!  Fetching your information.... ');
						FB.api('/me/checkins', 'post', {
							message : 'MESSAGE_HERE',
							place : 150213808375785,
							coordinates : {
								'latitude' : 40.6006096,
								'longitude' : 140.47384258333
							}
						}, function(response) {
							alert("Checked in!");
						});
					} else {
						console.log('User cancelled login or did not fully authorize.');
					}
				}, {scope: 'publish_checkins'});

			}
		</script>
		<button onclick="checkin()">
			checkin
		</button>
	</body>
</html>
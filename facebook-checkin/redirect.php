<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>Facebookチェックイン</title>
	<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>
	
	<script>
	
		// $(document).ready(function() {
			// if (navigator.geolocation) {
				// navigator.geolocation.getCurrentPosition(function(position) {
					// var lat = position.coords.latitude;
					// var lon = position.coords.longitude;
					// var acc = position.coords.accuracy;
// 
					// $.post('checkinpoint.php', {
						// // lat : lat,
						// // lon : lon
// 
						// lat : 40.6006096,
						// lon : 140.47384258333,
						// token: '<?php echo $_GET['code'] ?>'
					// }, function(res) {
						// $("#facebookcheckin").append(res);
					// });
				// }, function() {
					// alert("位置が判定できません。\n再度読み込んでください。");
				// }, {
					// maximumAge : 60 * 1000,
					// timeout : 5000,
					// enableHighAccuracy : true
				// });
			// } else {
				// alert("現在の位置情報を取得できません。");
			// }
		// });
		
	</script>
	
</head>
<body>
	<div><?php echo $_GET['code'] ?></div>
	<div id="facebookcheckin">
		
<?php

	$lat = 40.6006096;
	$lon = 140.47384258333;
	$center = $lat .",". $lon;
	$url = "https://graph.facebook.com/search?type=place&center={$center}&distance=500&access_token=". $_GET['code'];
	$checkpoint = json_decode(file_get_contents($url));
	$checkpoint_data = $checkpoint->data;
	$count = count($checkpoint_data);

	for($i = 0; $i < $count; $i++){
		echo "<li><a href =\"checkin.php?lat={$lat}&lon={$lon}&checkin_id={$checkpoint_data[$i]->id}\">{$checkpoint_data[$i]->name}</a></li>\n";
	};
	
?>

	</div>
</body>
</html>
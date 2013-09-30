<?php

	$center = $_POST['lat'] .",". $_POST['lon'];
	$url = "https://graph.facebook.com/search?type=place&center={$center}&distance=500&access_token=". $_POST['token'];
	$checkpoint = json_decode(file_get_contents($url));
	$checkpoint_data = $checkpoint->data;
	$count = count($checkpoint_data);

	for($i = 0; $i < $count; $i++){
		print "<li><a href =\"checkin.php?lat={$_POST['lat']}&lon={$_POST['lon']}&checkin_id={$checkpoint_data[$i]->id}\">{$checkpoint_data[$i]->name}</a></li>\n";
	};
	
?>
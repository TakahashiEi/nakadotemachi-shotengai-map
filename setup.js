var languages = ['ja', 'en', 'zh', 'ko'], current_language_index = 0;
var map_pieces_x_count = 10, map_pieces_y_count = 7;
var map_piece_width = 256, map_piece_height = 256;
var map_piece_right_end_width = 171, map_piece_bottom_end_height = 216;
var can_touch = false;

function load_map(){
	if(is_http){
		for(var i = 0; i < map_pieces_y_count; i++){
			for(var j = 1; j <= map_pieces_x_count; j++){
				var piece_id = 'map-piece-' + ('0' + (i * map_pieces_x_count + j)).slice(-2);
				var piece = $('<div></div>').attr('id', piece_id).addClass('map-piece').append(
					$('<img />').attr({
						src: 'images/map-pieces/' + piece_id + '.jpg',
						alt: ''
					}).load(function(){
						$(this).fadeIn('slow')
					})
				).css({
					left: (j - 1) * map_piece_width,
					top: i * map_piece_height
				}).appendTo($('#map'));
				if(j == map_pieces_x_count) piece.addClass('right-end');
				if(i == map_pieces_y_count - 1) piece.addClass('bottom-end');
			};
		};
	}else if(is_app){
		$('#map').replaceWith(
			$('<img />').attr({
				id: 'map',
				src: 'images/map-pieces/one-piece.jpg',
				alt: ''
			})
		);
	}
}

function load_illust_groups(){
	for(var group_name in illust_groups){
		var group = illust_groups[group_name];
		var dom = $('<div></div>').attr({
			id: group_name
		}).css({
			left: group.left,
			top: group.top,
			width: group.width,
			height: group.height
		}).addClass('illust-group ' + group.method).append(
			$('<img />').attr({
				src: 'images/illusts/' + group_name + '.png',
				alt: ''
			}).addClass('bg')
		).appendTo($('#container'));
		for(var item_name in group.items){
			var item = group.items[item_name];
			var item_dom = $('<img />').attr({
				src: 'images/illusts/' + group_name + '-' + item_name + '.png',
				alt: '',
				'data-original-left': item.left,
				'data-original-top': item.top
			}).css({
				left: item.left,
				top: item.top,
				width: item.width,
				height: item.height
			}).addClass('item').appendTo(dom);
			if(item.additional_classes) item_dom.addClass(item.additional_classes);
		}
		if(group.name_ja){
			for(var i = 0; i < languages.length; i++){
				var language = languages[i];
				dom.data('name_' + language, group['name_' + language]).data('text_' + language, group['text_' + language])
			};
		}
	}
}

function load_illusts(){
	for(var illust_name in illusts){
		var data = illusts[illust_name];
		$('<img />').attr({
			id: illust_name,
			src: 'images/illusts/' + illust_name + '.png',
			alt: ''
		}).css({
			left: data.left,
			top: data.top,
			width: data.width,
			height: data.height
		}).addClass('illust').appendTo($('#container'))
	}
}

function load_texts(){
	for(var text_name in texts){
		var data = texts[text_name];
		var dom = $('<div></div>').attr({
			id: text_name
		}).css({
			left: data.left,
			top: data.top,
			width: data.width,
			height: data.height
		}).addClass('text').appendTo($('#container'))
		$('<img />').attr({
			src: 'images/texts/ja/' + text_name + '.png',
			alt: ''
		}).addClass('by-language ja fixed').appendTo(dom)
		// for(var i = 0; i < languages.length; i++){
			// var language = languages[i];
			// if(language == 'ja'){
				// $('<img />').attr({
					// src: 'images/texts/' + language + '/' + text_name + '.png',
					// alt: ''
				// }).addClass('by-language ' + language).appendTo(dom)
			// }
		// }
	}
}

function load_shops(){
	for(var shop_id in shops){
		var data = shops[shop_id];
		var dom = $('<div></div>').attr({
			id: shop_id
		}).css({
			left: data.left,
			top: data.top,
			width: data.width,
			height: data.height
		}).addClass('shop').appendTo($('#container'))
		if(data.bubble_vert_adjust) dom.data('bubble_vert_adjust', data.bubble_vert_adjust);
		if(data.facebook_id) dom.data('facebook_id', data.facebook_id);
		if(data.twitter_id) dom.data('twitter_id', data.twitter_id);
		if(data.url) dom.data('url', data.url);
		if(data.name_ja){
			for(var i = 0; i < languages.length; i++){
				var language = languages[i];
				if(language == 'ja'){
					var fixed_class = data['name_en']? '': 'fixed ';
					dom.append(
						$('<img />').attr({
							src: 'images/shops/' + language + '/' + shop_id + '.png',
							alt: ''
						}).addClass(fixed_class + 'image name by-language ' + language)
					).data('name_' + language, data['name_' + language]).data('text_' + language, data['text_' + language])
				}else{
					dom.append(
						$('<div></div>').addClass('text name by-language ' + language).append(
							$('<div></div>').addClass('outer').append(
								$('<div></div>').text(data['name_' + language]).addClass('inner')
							)
						)
					).data('name_' + language, data['name_' + language]).data('text_' + language, data['text_' + language])
				}
			};
		}
	}
}

$(document).ready(function(){
	
	if('ontouchstart' in document.documentElement){
		$('body').addClass('can-touch');
		can_touch = true;
	}
	
	$('#container').width(
		map_piece_width * (map_pieces_x_count - 1) + map_piece_right_end_width
	).height(
		map_piece_height * (map_pieces_y_count - 1) + map_piece_bottom_end_height
	);
	//load_map();
	load_illust_groups();
	load_illusts();
	load_texts();
	load_shops();
	$('.' + languages[current_language_index]).addClass('current');
	
})
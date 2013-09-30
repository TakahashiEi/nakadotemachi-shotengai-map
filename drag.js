var drag_distances_pop_interval = 20;
var momentum_coefficient = 7.5;

var drag_base, drag_client;
var min_left, min_top;

function disableClickEvent(jquery_obj){
	var element = jquery_obj.get(0);
	element.onmousedown = function (){return false;};
	element.onmouseup = function (){return false;};
	element.onmouseover = function (){return false;};
	element.ondrag = function (){return false;};
	element.ondragstart = function (){return false;};
	element.ondragend = function (){return false;};
}

$(document).ready(function(){
	
	if(!$('body').hasClass('can-touch')){
		
		drag_base = $('#container'), drag_client = $('body');
		
		var drag_distances = new Array(), drag_timer;
		var drag_pos_x = false, drag_pos_y = false;
				
		function base_start_move(pos){
			drag_base.stop(true);
			if(document.selection){
				document.selection.empty();
			}else if(window.getSelection){
				window.getSelection().removeAllRanges();
			}
			drag_base.addClass('grabbing');
			drag_pos_x = pos.clientX;
			drag_pos_y = pos.clientY;
			drag_timer = setInterval(function(){
				drag_distances.pop();
			}, drag_distances_pop_interval)
		}
		
		function base_move(pos){
			if(drag_base.hasClass('grabbing')){
				var x = pos.clientX, y = pos.clientY;
				var distance_left = x - drag_pos_x, distance_top = y - drag_pos_y;
				var dest_left = drag_base.position().left + distance_left, dest_top = drag_base.position().top + distance_top;
				if(dest_left > 0) dest_left = 0; else if(dest_left < min_left) dest_left = min_left;
				if(dest_top > 0) dest_top = 0; else if(dest_top < min_top) dest_top = min_top;
				drag_base.css({
					left: dest_left,
					top: dest_top
				})
				on_scroll_or_drag(dest_left, dest_top);
				drag_distances.unshift({
					left: distance_left,
					top: distance_top
				})
				drag_pos_x = x;
				drag_pos_y = y;
			}
		}
		
		function base_end_move(){
			drag_base.removeClass('grabbing selecting');
			var momentum_left = 0, momentum_top = 0;
			var distance_count = drag_distances.length;
			for(var i = 0; i < distance_count; i++){
				var distance = drag_distances[i];
				momentum_left += distance.left;
				momentum_top += distance.top;
			};
			drag_distances = [];
			clearInterval(drag_timer);
			momentum_left = drag_base.position().left + momentum_left / (distance_count + 1) * momentum_coefficient;
			momentum_top = drag_base.position().top + momentum_top / (distance_count + 1) * momentum_coefficient;
			if(momentum_left > 0) momentum_left = 0; else if(momentum_left < min_left) momentum_left = min_left;
			if(momentum_top > 0) momentum_top = 0; else if(momentum_top < min_top) momentum_top = min_top;
			drag_base.stop(true).animate({
				left: momentum_left,
				top: momentum_top
			}, 'slow', 'easeOutCirc');
			on_scroll_or_drag(momentum_left, momentum_top);
		}
		
		drag_base.mousedown(function(e){
			$(this).data('method', 'mouse');
			base_start_move(e);	
		}).mousemove(function(e){
			if($(this).data('method') == 'mouse'){
				base_move(e);
			}
		}).mouseup(function(){
			base_end_move();
		}).mouseleave(function(){
			base_end_move();
		}).bind('touchstart', function(e){
			$(this).data('method', 'touch');
			e.preventDefault();
			base_start_move(event.changedTouches[0]);
		}).bind('touchmove', function(e){
			e.preventDefault();
			base_move(event.changedTouches[0]);
		}).bind('touchend', function(){
			base_end_move();
		}).bind('selectstart', function(){
			return false;
		})
		
		disableClickEvent($('#map'));
		
		$(window).trigger('resize');
	
	}
	
})

function on_scroll_or_drag(x, y){
	if(x < -480 || y < -550){
		$('#title-s').fadeIn('slow')
	}else{
		$('#title-s').fadeOut('slow')
	}
}

$(window).resize(function(){
	if(!$('body').hasClass('can-touch')){
		min_left = drag_client.width() - drag_base.width(), min_top = drag_client.height() - drag_base.height();
	}
}).scroll(function(){
	if($('body').hasClass('can-touch')) on_scroll_or_drag(-$(window).scrollLeft(), -$(window).scrollTop());
})

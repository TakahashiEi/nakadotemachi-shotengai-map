var jolt_degrees = [5, -5], jolt_interval = 400, jolt_easing = 'easeOutCubic';
var rotate_interval = 1500, rotate_easing = 'easeInOutQuart';
var bowwow_actions = [
	{left: -20, top: -10, degree: 5},
	{left: 0, top: 0, degree: 0},
	{left: -15, top: 10, degree: -5},
	{left: 0, top: 0, degree: 0},
	{left: 0, top: 0, degree: 0},
	{left: 0, top: 0, degree: 0}
], bowwow_interval = 150, bowwow_easing = 'easeInOutExpo';
var fish_actions = [10, -10, 10, -10, 0, 0, 0, 0], fish_interval = 80, fish_easing = 'easeInOutExpo';
var bubble_interval = 1500;
var blow_up_interval = 200, blow_up_easing = 'easeOutCubic';

$(document).ready(function(){
	
	function blow_up_balloon(jquery_obj){
		
		if(facebook_post_editting) return;
		
		var previous_balloon = $('.balloon').first();
		var is_self = (previous_balloon.parent().attr('id') == jquery_obj.attr('id'));
		previous_balloon.fadeOut('fast', function(){previous_balloon.remove()});
		
		if(!is_self && (jquery_obj.data('text_ja') || jquery_obj.data('url') || jquery_obj.data('twitter_id') || jquery_obj.data('facebook_id'))){
			
			var language = languages[current_language_index];
			
			var horz_pos = jquery_obj.offset().left, vert_pos = jquery_obj.offset().top;
			if($('body').hasClass('can-touch')){
				horz_pos -= $(window).scrollLeft();
				vert_pos -= $(window).scrollTop();
			}
			var point_to = (horz_pos > ($(window).width() - horz_pos - jquery_obj.width()))? 'to-right': 'to-left';
			var vert = (vert_pos > ($(window).height() - vert_pos - jquery_obj.height()))? 'top': 'bottom';
			var top_src, bottom_src;
			if(vert == 'top'){
				top_src = 'flat';
				bottom_src = point_to;
			}else{
				top_src = point_to;
				bottom_src = 'flat'
			}
			
			var next_balloon = $('<div></div>').append(
				$('<img />').attr({
					src: 'images/balloon-top-' + top_src + '.png',
					alt: ''
				}).addClass('top')
			).append(
				$('<img />').attr({
					src: 'images/balloon-bottom-' + bottom_src + '.png',
					alt: ''
				}).addClass('bottom')
			).append(
				$('<div></div>').append(
					$('<img />').attr({
						src: 'images/balloon-bg.png',
						alt: ''
					}).addClass('bg')
				).append(
					$('<h1></h1>').text(jquery_obj.data('name_' + language))
				).append(
					$('<img />').attr({
						src: 'images/close-balloon.png',
						alt: 'close'
					}).addClass('close-balloon').click(function(){
						next_balloon.fadeOut('fast', function(){next_balloon.remove()});
					})
				).addClass('body')
			).addClass('balloon ' + point_to + ' ' + vert).appendTo(jquery_obj).fadeIn('normal');
			if(jquery_obj.data('text_ja')){
				$('.body', next_balloon).append(
					$('<article></article>').text(jquery_obj.data('text_' + language))
				)
			}
			if(jquery_obj.data('url')){
				$('.body', next_balloon).append(
					$('<a></a>').append(
						$('<img />').attr({
							src: 'images/icon-home.png',
							alt: ''
						})
					).append(
						$('<span></span>').text('ホームページを見る')
					).addClass('to-site').attr({
						href: jquery_obj.data('url'),
						target: '_blank'
					}).click(function(){
						if(is_phonegap){
							window.open(jquery_obj.data('url'), '_system');
							return false;
						}
					})
				)
			}
			if(jquery_obj.data('facebook_id')){
				if(is_http){
					build_facebook_checkin_post_editor($('.body', next_balloon))
				}else{
					$('.body', next_balloon).append(
						$('<a></a>').addClass('checkin-with-facebook').append(
							$('<img />').attr({
								src: 'images/icon-facebook.png',
								alt: ''
							})
						).append(
							$('<span></span>').text('フェイスブックページへ')
						).attr({
							href: (navigator.userAgent.indexOf('Android') > 0)? 'https://www.facebook.com/' + jquery_obj.data('facebook_id'): 'fb://profile/' + jquery_obj.data('facebook_id'),
							target: '_blank'
						})
					)
				}
			}
			if(jquery_obj.data('twitter_id')){
				var twitter_url = 'https://twitter.com/intent/tweet?button_hashtag=' + jquery_obj.data('twitter_id');
				$('.body', next_balloon).append(
					$('<a></a>').append(
						$('<img />').attr({
							src: 'images/icon-twitter.png',
							alt: ''
						})
					).append(
						$('<span></span>').text('ツイートする')
					).addClass('tweet').attr({
						href: twitter_url,
						target: '_blank'
					}).click(function(){
						if(is_phonegap){
							window.open(twitter_url, '_system');
							return false;
						}
					})
				)
			}
			
		}
		
	}
	
	$('.illust-group').each(function(){
		$(this).bind('mouseenter', function(){
			blow_up_balloon($(this));
		})
	})
	
	function jolt(jquery_obj){
		jquery_obj.stop(true);
		for(var i = 0; i < jolt_degrees.length; i++){
			jquery_obj.animate({rotate: jolt_degrees[i]}, jolt_interval, jolt_easing)
		};
	}
	$('.jolt').each(function(){
		var timer;
		var item = $('.item', this);
		$(this).bind('mouseenter', function(){
			jolt(item);
			timer = setInterval(function(){
				jolt(item);
			}, jolt_interval * jolt_degrees.length);
		}).bind('mouseleave touchend', function(){
			item.animate({rotate: 0}, jolt_interval * 3);
			clearInterval(timer);
		})
	})
	
	function rotate(jquery_obj){
		jquery_obj.stop(true).rotate(0).animate({rotate: 720}, rotate_interval, rotate_easing);
	}
	$('.rotate').each(function(){
		var timer;
		var item = $('.item', this);
		$(this).bind('mouseenter', function(){
			rotate(item);
			timer = setInterval(function(){
				rotate(item);
			}, rotate_interval * 1.1);
		}).bind('mouseleave touchend', function(){
			clearInterval(timer);
		})
	})
	
	function bowwow(jquery_obj){
		for(var i = 0; i < bowwow_actions.length; i++){
			var action = bowwow_actions[i];
			jquery_obj.animate({
				left: parseInt(jquery_obj.attr('data-original-left'), 10) + action.left,
				top: parseInt(jquery_obj.attr('data-original-top'), 10) + action.top,
				rotate: action.degree
			}, bowwow_interval, bowwow_easing)
		};
	}
	$('.bowwow').each(function(){
		var timer;
		var item = $('.item', this);
		$(this).bind('mouseenter', function(){
			bowwow(item);
			timer = setInterval(function(){
				bowwow(item);
			}, bowwow_interval * bowwow_actions.length);
		}).bind('mouseleave touchend', function(){
			clearInterval(timer);
		})
	})
	
	function fish(jquery_obj){
		for(var i = 0; i < fish_actions.length; i++){
			jquery_obj.animate({
				rotate: fish_actions[i]
			}, fish_interval, fish_easing)
		};
	}
	$('.fish').each(function(){
		var timer;
		var bg = $('.bg', this);
		$(this).bind('mouseenter', function(){
			fish(bg);
			timer = setInterval(function(){
				fish(bg);
			}, fish_interval * fish_actions.length);
		}).bind('mouseleave touchend', function(){
			clearInterval(timer);
		})
		var self = $(this);
		var interval = bubble_interval * (0.95 + Math.random());
		setInterval(function(){
			$('.item', self).css({
				marginTop: 0,
				opacity: 1
			}).animate({
				marginTop: -50,
				opacity: 0
			}, interval)
		}, interval * 1.1)
	})
	
	$('.shop').each(function(){
		$(this).bind('mouseenter', function(ev){
			$('.shop.current .name').animate({
				width: '100%',
				height: '100%',
				left: 0,
				top: 0
			}, blow_up_interval).css({
				zIndex: 0
			});
			$('.shop.current').removeClass('current');
			$('.name', this).animate({
				width: '120%',
				height: '120%',
				left: '-10%',
				top: $(this).data('bubble_vert_adjust')? -$(this).data('bubble_vert_adjust') + '%': '-10%'
			}, blow_up_interval).css({
				zIndex: 50
			});
			$(this).addClass('current');
			blow_up_balloon($(this));
		}).bind('mouseleave touchend', function(){
			$('.name', this).animate({
				width: '100%',
				height: '100%',
				left: 0,
				top: 0
			}, blow_up_interval).css({
				zIndex: 0
			});
		})
	})
	
	$('#compass').bind('mouseenter', function(){
		if(!$(this).data('is-rotating')){
			$(this).data('is-rotating', true).animate({
				rotate: 720
			}, 1000, 'easeOutElastic', function(){
				$(this).data('is-rotating', false).rotate(0);
			})
		}
	})
	
})

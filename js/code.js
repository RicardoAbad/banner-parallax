$(function() {

	if ($(window).width() < 481) {
  	$('#scene').parallax( { limitY:1 } );
	} else{
		$('#scene').parallax( { limitY:20 } );
	};
  


	$(window).on('scroll', function(event) {

		var wScroll = $(window).scrollTop();
		var wHeight = $(window).height();
		var opacity = 1 - (wScroll/800); 

		// Simulating parallax scroll
		$('.sitename div').css({
			'-webkit-transform': 'translateY('+ (wScroll / 2)*2.25 +'px) scale('+ ( 1+(wScroll / 800) ) +')',
			'-moz-transform': 'translateY('+ (wScroll / 2)*2.25 +'px) scale('+ ( 1+(wScroll / 800) ) +')',
			'-ms-transform': 'translateY('+ (wScroll / 2)*2.25 +'px) scale('+ ( 1+(wScroll / 800) ) +')',
			transform: 'translateY('+ (wScroll / 2)*2.25 +'px) scale('+ ( 1+(wScroll / 800) ) +')',
			opacity: opacity
		});

		$('.pajaro .wrap').css({
			'-webkit-transform': 'translateX('+ (wScroll / 2)*3 +'px) translateY('+ (wScroll / 2)*.5 +'px) scale('+ ( 1+(wScroll / 500) ) +')',
			'-moz-transform': 'translateX('+ (wScroll / 2)*3 +'px) translateY('+ (wScroll / 2)*.5 +'px) scale('+ ( 1+(wScroll / 500) ) +')',
			'-ms-transform': 'translateX('+ (wScroll / 2)*3 +'px) translateY('+ (wScroll / 2)*.5 +'px) scale('+ ( 1+(wScroll / 500) ) +')',
			transform: 'translateX('+ (wScroll / 2)*3 +'px) translateY('+ (wScroll / 2)*.5 +'px) scale('+ ( 1+(wScroll / 500) ) +')',
		});

		$('.level-5-5').css({
			'-webkit-transform': 'translateX(-'+ (wScroll / 2)*1.1 +'px) translateY('+ (wScroll / 1.3) +'px) scale('+ ( 1-(wScroll / 1000) ) +')',
			'-moz-transform': 'translateX(-'+ (wScroll / 2)*1.1 +'px) translateY('+ (wScroll / 1.3) +'px) scale('+ ( 1-(wScroll / 1000) ) +')',
			'-ms-transform': 'translateX(-'+ (wScroll / 2)*1.1 +'px) translateY('+ (wScroll / 1.3) +'px) scale('+ ( 1-(wScroll / 1000) ) +')',
			transform: 'translateX(-'+ (wScroll / 2)*1.1 +'px) translateY('+ (wScroll / 1.3) +'px) scale('+ ( 1-(wScroll / 1000) ) +')',
		});
	});


	// Scroll to section smoth SLOOOOWWWWWWWLLLLLYYYYYY
	$('.goto-slow').on('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		var pos_ancla = $($anchor.attr('href')).offset().top;
		$('html, body').stop().animate({
			scrollTop: pos_ancla
		}, 8000);
	});
	// Scroll to section smoth
	$('.goto').on('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		var pos_ancla = $($anchor.attr('href')).offset().top;
		$('html, body').stop().animate({
			scrollTop: pos_ancla
		}, 2000);
	});

	// Inicio descenso automático condicional y temporizado
	setTimeout(function(){
		var wScroll = $(window).scrollTop();
		var ancla = $('#blue-section').offset().top;
		if (wScroll > 0) {
			return false;
		} else{
		  $('html, body').stop().animate({
				scrollTop: ancla
			}, 15000);
		};
	}, 15000);


});
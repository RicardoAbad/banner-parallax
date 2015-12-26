$(function() {


	if ($(window).width() < 481) {
		$('#scene').parallax( { limitY:1 } );
	} else{
		$('#scene').parallax( { limitY:20 } );
	};


	$('#scene-2').parallax();
	


	$('#main-container').fullpage({
		scrollingSpeed: 5000,
		resize:true,
		//scrollBar: true,
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);
			//after leaving section 1
			if (index == 1 && direction =='down') {
				console.log("Going to section 2!");
				$('#page-1').addClass('out');
			} else if (index == 2 && direction == 'up') {
				console.log("Going to section 1!");
				$('#page-1').removeClass('out');
			}
		}
	});

	/*$(window).on('scroll', function(event) {

		var wScroll = $('#page-1').scrollTop();
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
	});*/


	// Scroll to section smoth SLOOOOWWWWWWWLLLLLYYYYYY
	/*$('.goto-slow').on('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		var pos_ancla = $($anchor.attr('href')).offset().top;
		$('html, body').stop().animate({
			scrollTop: pos_ancla
		}, 8000);
	});*/
	// Scroll to section smoth
	/*$('.goto').on('click', function(event) {
		event.preventDefault();
		var $anchor = $(this);
		var pos_ancla = $($anchor.attr('href')).offset().top;
		$('html, body').stop().animate({
			scrollTop: pos_ancla
		}, 2000);
	});*/

	// Inicio descenso automático condicional y temporizado
	/*setTimeout(function(){
		$.fn.fullpage.moveSectionDown();
	}, 5000);
	setTimeout(function(){
		$.fn.fullpage.moveSectionUp();
	}, 15000);*/

});
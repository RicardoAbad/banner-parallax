$(function() {


	if ($(window).width() < 481) {
		$('#scene').parallax( { limitY:1 } );
	} else {
		$('#scene').parallax( { limitY:20 } );
	};
	$('#scene-2').parallax();
	$('#scene-3').parallax();
	$('#scene-3b').parallax();
	

	if ( $('.page-index').length > 0 ) {
		$('#main-container').fullpage({
			scrollingSpeed: 4000,
			resize:false,
			scrollBar: true,
			//fitToSection: false,
			fixedElements: '#controls',
			responsiveHeight: 676,
			onLeave: function(index, nextIndex, direction){
				sound_slide();
				var leavingSection = $(this);
				//after leaving section 1
				if (index == 1 && direction =='down') {
					console.log("Going to section 2!");
					$('#page-1').addClass('out');
					$('.mano, .cat').removeClass('out');
				} else if (index == 2 && direction == 'up') {
					console.log("Going to section 1!");
					$('#page-1').removeClass('out');
					$('.mano, .cat').addClass('out');
				}
				//after leaving section 2
				else if (index == 2 && direction =='down') {
					console.log("Going to section 3!");
					$('.mano').addClass('out');
					$('.cat').addClass('out-down');
				} else if (index == 3 && direction == 'up') {
					console.log("Going to section 2!");
					$('.mano').removeClass('out');
					$('.cat').removeClass('out-down');
				}
				//after leaving section 3
				else if (index == 3 && direction =='down') {
					console.log("Going to section 4!");
					$('.link-1,.link-2,.link-3,.link-4').removeClass('out');
				} else if (index == 4 && direction == 'up') {
					console.log("Going to section 3!");
					$('.link-1,.link-2,.link-3,.link-4').addClass('out');
				}
			}
		});
	} else if ( $('.page-sobre-mi').length > 0 ) {
		$('#main-container').fullpage({
			scrollingSpeed: 4000,
			resize:false,
			scrollBar: true,
			//fitToSection: false,
			easingcss3:'cubic-bezier(0.300, -0.315, 0.715, 1.315)',
			fixedElements: '#controls',
			responsiveHeight: 676,
			onLeave: function(index, nextIndex, direction){
				sound_slide();
				var leavingSection = $(this);
				//actuando en la 2
				if (index == 3 && direction =='down' || index == 5 && direction == 'up') {
					console.log("Going to section 4!");
					$('#page-3c').removeClass('out');
				} else {
					console.log("Leaving section 4!");
					$('#page-3c').addClass('out');
				}
				//actuando en la 5
				if (index == 7 && direction =='down') {
					console.log("Going to section 8!");
					$('.link-1,.link-2,.link-3,.link-4').removeClass('out');
				} else if (index == 8 && direction == 'up') {
					console.log("Going to section 7!");
					$('.link-1,.link-2,.link-3,.link-4').addClass('out');
				}
			}
		});
	};

	$('.next').on('click', function(event) {
		$.fn.fullpage.moveSectionDown();
	});
	$('.prev').on('click', function(event) {
		$.fn.fullpage.moveSectionUp();
	});


	//audio 
	var index_audio;
	if ( $('.page-index').length > 0 ) {
		var index_audio = document.getElementById('soundtrack_index');
		index_audio.volume=0.75;
	} else if ( $('.page-sobre-mi').length > 0 ) {
		var index_audio = document.getElementById('sondtrack_sobre_mi');
	};

	$('#audio_control').on('click', function(event) {
		if (index_audio.paused ) {
			index_audio.play();
			$('#audio_control').addClass('vol-off');
			$('#audio_control').removeClass('vol-on');
		} else {
			index_audio.pause();
			$('#audio_control').addClass('vol-on');
			$('#audio_control').removeClass('vol-off');
		}
	});

	$('a').mouseenter(function() {
		document.getElementById('hover_off').volume=0.2;
		if (!index_audio.paused ) {
			document.getElementById('hover_off').play();
		}
	});
	$('a').mouseleave(function() {
		document.getElementById('hover').volume=0.17;
		if (!index_audio.paused ) {
			document.getElementById('hover').play();
		}
	});

	function sound_slide() {
		document.getElementById('slide_sound').volume=0.2;
		if (!index_audio.paused ) {
			document.getElementById('slide_sound').play();
		}
	};





	function moveBg() {
		$('.bg-slide').animate({'background-position': (init_pos *10) + 'px'},1000,'linear',function(){
				init_pos++;
				moveBg();
			}
		);
	};

	if ( $('.bg-slide').length > 0 ) {
		var init_pos = 0;
		moveBg();
	};

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

jQuery(document).ready(function(
	) {

	// Scroll to start
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 1000);
		return false;
	});

	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});

// Scroll to end

 //collapse the sidebar
     $('.menu-btn').click(function(){
       $('.sidebar-menu').addClass('active');
     });

     $('.close-btn').click(function(){
       $('.sidebar-menu').removeClass('active');
     });



	 $('.main-carousel').flickity({				
		// options
		cellAlign: 'center',
		contain: true,
		groupCells: true,
		freeScroll: true,
		wrapAround: true,
		groupCells: 1,
		// groupCells: '100%',
	   autoPlay: true,
	   // autoPlay: 1500,
	   pauseAutoPlayOnHover: false,
	   initialIndex: 1,
	   wrapAround: true,
	   prevNextButtons: true,
	   pageDots: true

	  });

	  $('.vedio-main, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: false
	});

	$('#count-box').CountUpCircle({
		duration: 4000,
		opacity_anim: true,
		step_divider: 2
	});
	$('#count-box2').CountUpCircle({
		duration: 4000,
		opacity_anim: true,
		step_divider: 1
	});
	$('#count-box3').CountUpCircle({
		duration: 4000,
		opacity_anim: true,
		step_divider: 3
	});
	$('#count-box4').CountUpCircle({
		duration: 4000,
		opacity_anim: true,
		step_divider: 5
	});

	// ACCORDION

	$('.ziehharmonika').ziehharmonika({
		collapsible: true,
	});

	$('.ziehharmonika2').ziehharmonika({
		collapsible: true,
	});

	

//main
});
$(function(){
	
	$('.slider').mobilyslider({
		content: '.sliderContent',
		children: 'section',
		transition: 'horizontal',
		animationSpeed: 500,
		autoplay: false,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		bullets: true,
		arrows: true,
		arrowsHide: true,
		prev: 'prev',
		next: 'next',
		animationStart: function(){},
		animationComplete: function(){}
	});
	
});
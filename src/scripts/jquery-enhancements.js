$(document).ready(function() {
	$('.sliderBullets a:first-child').addClass('first');
	$('.sliderArrows a.prev').attr('title','Previous Project');
	$('.sliderArrows a.next').attr('title','Next Project');	
    $('a').each(function() {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('current');
			$(this).addClass('m-hide');
			$('.wrap-logo a').removeClass('m-hide');
        }
    });
	$('a.link-disable, a.current').click(function(event){
		event.preventDefault();
	});
});

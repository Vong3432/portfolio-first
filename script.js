$(window).scroll(function(){
	parallax();
});

function parallax()
{
	var wScroll = $(window).scrollTop();
	$(".first-section").css('background-position','center '+(wScroll * 0.75)+'px');	
	$(".second-section").css('background-position','center '+(-wScroll * 0.75)+'px');	
}
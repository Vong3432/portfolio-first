$(window).scroll(function(){
	parallax();
	shrink();
});

function parallax()
{
	var wScroll = $(window).scrollTop();	
}

var lastScrollTop = 0;
function shrink()
{
	var wScroll = $(window).scrollTop();	

	if (wScroll >= lastScrollTop ) {		
		$(".top-nav").css('background-color','rgba(0,0,0,0.7)');
		$(".top-nav").css('font-size','1.1em');	
	}
	else
	{		
		$(".top-nav").css('background-color','#19b5fe');
		$(".top-nav").css('font-size','1.2em');		
	}
	// console.log(lastScrollTop + " and " + wScroll);
	lastScrollTop = wScroll;
}
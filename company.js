$(window).scroll(function(){
	
	shrink();
});


var lastScrollTop = 0;
function shrink()
{
	var wScroll = $(window).scrollTop();	

	if (wScroll >= lastScrollTop ) {		
		$(".top-nav").css('background-color','rgba(44, 62, 80, 0.7)');
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
$(document).ready(function(){

	$(".nav-icon").on('click', function(){
		$("nav").slideToggle();
	});

	getHeight();
	
	//$(window).on

	$(window).on('resize', function(){
		if($(".page-section").not(":visible")){
			$(this).removeClass('current');
		}
		getHeight();
		
	});
	
	$(window).on('scroll', function(){
	
	});
	
	function getHeight(){
		var winH = $(window).height();
		var winW = $(window).width();
		
		$(".header, nav").css({
			'width': winW
		});
		
		if($(".page-section").is("visible")){
		 	$(this).addClass('current');
		 }
		$(".page-section").each(function(){
			$(this).css({
				'height': winH,
				'position': 'relative'
				});
		});
		
		$(".vert-align").each(function(){
			var pgContent = $(this).height();
			var pgPadding = (winH - pgContent)/2;
			
			$(this).css('padding-top', pgPadding);
		});
		
		var navH = winH/8;
		
		$("nav").css({
			'padding-top' : navH*2,
			'paddin-bottom' : navH
		});
		
		
		$("nav a").css( 'height', navH);
	}
	
	$(document).scroll(function() {
    $("div.page-section:not(.active)").each(function() {
        if (isScrolledIntoView(this)) {
           $("div.page-section").removeClass("active");
           $(this).addClass("active");
           $("body").animate({ scrollTop: $(this).offset().top }, 1000)
        }
    });
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return (elemTop <= docViewBottom) && (elemTop > docViewTop);
}​});


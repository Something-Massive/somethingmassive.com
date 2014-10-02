$(document).ready(function(){
	
	//opens and closes menu + change images
	$(".nav-icon").on('click', function(){
		var navimg = $(this).find("img");
		
		if($("nav.naver").is(":visible")){
			openimg();
			
		} else if($("nav.naver").not(":visible")){
			closeimg();
		};
		
		$("nav").slideToggle();
	});
	
	function closeimg(){
		var lightlogo = $(".page-section.light.active").length;

		if(lightlogo != 0){
			$("h4.nav-icon img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/close_orange.png");
		}else{
			$("h4.nav-icon img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/close.png");
		};
		$('body').css('overflow','hidden');
	};
	
	function openimg(){
		var lightlogo = $(".page-section.light.active").length;

		if(lightlogo != 0){
			$("h4.nav-icon img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/nav-icon_orange.png");
		}else{
			$("h4.nav-icon img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/nav-icon.png");
		};
		$('body').css('overflow','auto');
	};
	
	function logoOrange(){
		$("a.sm-logo img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/logo_orange.png").fadeIn();
		$("h4.nav-icon img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/nav-icon_orange.png").fadeIn();
		$("nav.naver").animate({'background-color' : '#283a50'});
	};
	
	function logoNormal(){
		$("a.sm-logo img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/logo.png").fadeIn();
		$("h4.nav-icon img").attr("src","http://fbdev.somethingmassive.com/smdev/wp-content/themes/somethingmassive2014/images/nav-icon.png").fadeIn();
		$("nav.naver").animate({'background-color' : '#c8643d'});
	};
	
	
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       $(".sm-logo, .nav-icon").fadeOut();
		   } else if (st < lastScrollTop){
		      $(".sm-logo, .nav-icon").fadeIn();
		   } 
		   lastScrollTop = st;
		   
		  if(st == 0){
			  $(".sm-logo, .nav-icon").fadeIn();
		  }
     });
					
	getHeight();

	$(window).on('resize', function(){
		getHeight();
	});
	
	//gets height and width for all elemets 
	function getHeight(){
		var winH = $(window).height();
		var winW = $(window).width();
		
		//menu styles and functions
		$(".header, nav").css({
			'width': winW + 20
		});
		
		var navH = winH/8;
		
		$("nav").css({
			'padding-top' : navH*2 -30,
			'paddin-bottom' : navH,
			'height': winH + 50 
		});
		
		$("nav a").css( 'height', navH - 20);
		
		//aligns vertically content 
		$(".vert-align").each(function(){
			var pgContent = $(this).height();
			var pgPadding = (winH - pgContent)/2;
			
			$(this).css('padding-top', pgPadding);
		});
		
		//full height section
		$(".page-section").each(function(){
			var contentH = $(this).find(".vert-align").height();	
			if(contentH < winH){
				$(this).height(winH);
			} else if (contentH > winH){
				$(this).height(contentH + contentH/3);
			}
			
			
		});
		
		//crew style and slide
		var crewinfo = $('span.crew-info').height();
		$(".the-crew-about ul li").css('overflow', 'hidden');
		$('span.crew-info').css('bottom', -crewinfo);
		
		//Slide-Up crew info
		$(".the-crew-about ul li").on('mouseenter', function(){
			$(this).find('span.crew-info').animate({'bottom':0},'fast');
		}).on('mouseleave', function(){
			$(this).find('span.crew-info').animate({'bottom':-crewinfo},'fast');
		});

	}

});
	


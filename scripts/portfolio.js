    //Javascript document

    var $mainnav = $('.main-nav');

    var mainNavTopPos = $mainnav.offset().top;

    $(window).scroll(function(){
    	if($(window).scrollTop() > mainNavTopPos){
    		$mainnav.addClass('sticky');
    	}else{
    		$mainnav.removeClass('sticky');
    	}
    	
    });

    AOS.init({
      offset: 200,
      duration: 1200,
      // easing: 'ease-in-sine',
      // delay: 100,
    });




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

    
// button script


var $body = $('body');
var $btnMobileMenu = $('.btn-mobile-menu');

// click event handler for the mobile menu button
$btnMobileMenu.click(function(){
  

  // toggle the show-mobile-menu class
  // on the body element
 $body.toggleClass('show-mobile-menu');
  
}); // end click event handler for the mobile menu button




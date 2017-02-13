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


    $('#nav-trigger').click(function (e)
    {

            if($('nav.mobile').hasClass('active'))
                {
                    $('nav.mobile').removeClass('active');
                    $('#nav-trigger').removeClass('active');
                    $('#nav-trigger i').removeClass('ham-menu').addClass('ham-menu');
    //                $('html').removeClass('noscroll');
    //                $('body').removeClass('noscroll');

                }
            else
                {
                    $('nav.mobile').addClass('active');
                    $('#nav-trigger').addClass('active');
                    $('#nav-trigger i').removeClass('ham-menu').addClass('ham-menu');

    //                $('html').addClass('noscroll');
    //                $('body').addClass('noscroll');
                }
    });

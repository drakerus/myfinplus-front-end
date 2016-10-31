$(document).ready(function() {


    var sidebar_height = $(".main").height();
    $(".left_main").height(sidebar_height);
	
	

});

$('.green_line').addClass('original').clone().insertAfter('.green_line').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

    var orgElementPos = $('.original').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.     
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
        $('.original').css('visibility', 'hidden');
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
        $('.original').css('visibility', 'visible');
    }
}


	/*
		if ($(window).width() <= '1300') {
			var width_main = $(window).width();
			$('.description').text(width_main);
			
            $(".open_menu").click(function() {
                $(".menu_block").toggleClass("active");
                $(".box_shadow").toggleClass("box_shadow_active");
                $(".open_menu").toggleClass("active");
            });

            $(".box_shadow").click(function() {
                $(".menu_block").toggleClass("active");
                $(".box_shadow").toggleClass("box_shadow_active");
                $(".button_open_menu a").toggleClass("active");
            });

        }
		*/
	
	
		
	function menu_main() {
		$(".open_menu").click(function(e) {
			$(".menu_block").toggleClass("active");
			$(".box_shadow").toggleClass("box_shadow_active");
			$(".open_menu").toggleClass("active");
			e.stopPropagation();
		});

		$(".box_shadow").click(function() {
			$(".menu_block").toggleClass("active");
			$(".box_shadow").toggleClass("box_shadow_active");
			$(".button_open_menu a").toggleClass("active");
		});
	}
		
	
		
		menu_main();

	
			
   
	
	


$(".warning2 .close").click(function() {
	$(".warning2").hide();
});

$('.bl_opt').click(function() {
  $('.hli').removeClass('hli');
  $(this).addClass('hli').find('input').prop('checked', true)    
});

$('.nav_login a').click(function() {
  $('.active_nav_login').removeClass('active_nav_login');
  $(this).addClass('active_nav_login');
});

$('.nav1').click(function() {
  $('.tab_active').removeClass('tab_active');
  $('.tab1_login').addClass('tab_active');
});

$('.nav2').click(function() {
  $('.tab_active').removeClass('tab_active');
  $('.tab2_login').addClass('tab_active');
});


  $( function() {
    $( "#accordion" ).accordion();
  } );
  

	
				$('ul.akkordeon li > p').click(function(){	//при клике на пункт меню:
					$(this).toggleClass('active');		//делаем данный пункт активным/неактивным
					$(this).next('div').slideToggle(200);	//раскрываем/скрываем следующий за "кликнутым" p блок div с эффектом slide
				});
	
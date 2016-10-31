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

$(document).ready(function() {
	if ($(window).width() <= '1300') {
		
            $(".open_menu").click(function() {
                $(".left_main").toggleClass("left_main_active");
                $(".box_shadow").toggleClass("box_shadow_active");
                $("#open_menu").toggleClass("active");
            });

            $(".box_shadow").click(function() {
                $(".left_main").toggleClass("left_main_active");
                $(".box_shadow").toggleClass("box_shadow_active");
                $(".button_open_menu a").toggleClass("active");
            });

        }
    $(window).resize(function() {
        if ($(window).width() <= '1300') {

            $("#open_menu").click(function() {
                $(".left_main").toggleClass("left_main_active");
                $(".box_shadow").toggleClass("box_shadow_active");
                $("#open_menu").toggleClass("active");
            });

            $(".box_shadow").click(function() {
                $(".left_main").toggleClass("left_main_active");
                $(".box_shadow").toggleClass("box_shadow_active");
                $(".button_open_menu a").toggleClass("active");
            });

        }

    });
});

$(".warning2 .close").click(function() {
	$(".warning2").hide();
});
$(document).ready(function() {
    $(".container").hide();
    $(".container").fadeIn('5000');
    $(".showcase-wrapper").hide();
    $(".showcase-wrapper").fadeIn("slow");
});


/*
var toggle = false;
$('.nav-toggle').on('click', function () {
    if (toggle == false) {
        $('#sidebar-wrapper').stop().animate({
            'left': '4px'
        });
        toggle = true;
    } else {
        $('#sidebar-wrapper').stop().animate({
            'left': '250px'
        });
        toggle = false;
    }
});
*/

$(function() {
	$('.project-box>.row>.project-post').append('<span class="more-info">Click for more information</span>');
    $('.project-box').click(function(e) {
        if (e.target.tagName == "A" || e.target.tagName == "IMG") {
            return true;
        }

    	$(this).find('.more-info').toggle();
        $(this).find('.post').slideToggle();
    });
});



//manipulates the opacity of the mobile menu

$(function() {
    $('#mobile-menu-btn').click(function() {
        if ($('#nav-backdrop').height() == 0) {
            $('#nav-backdrop').fadeIn(220);
            $('#nav-backdrop').height($(document).height());
        } else {
            $('#nav-backdrop').fadeOut(220, function() {
                $('#nav-backdrop').height(0);
            });
        }
    });
});


//the point on the page at which the opacity changes
var pageFold = 120;
// adding nav-bg to navigation when scrolling down
window.onscroll = function() {
    
	// adding nav-bg to navigation when scrolling down
    if (window.pageYOffset > pageFold) {
        $('#nav-bg').fadeIn(320);
    } else if ($('#nav-bg').height() < $(document).height()) {
        $('#nav-bg').fadeOut(320);
    }

    //displaying request booking btn - this should be based on the offset
    // of the booking request button in the header
    var bookingButtonOffset = $('#request-booking-btn').offset().top;
    if (window.pageYOffset > bookingButtonOffset - 45) {
        $('#request-booking-btn-menu').css("opacity",1);
        $('#request-booking-btn-menu').css("cursor","pointer");
        $('#request-booking-btn-menu').css('visibility', 'visible');
    } else {
    	$('#request-booking-btn-menu').css("opacity",0);
    	$('#request-booking-btn-menu').css('visibility', 'hidden');
    }
}

// removing the navigation backdrop if screen size increases
$(window).resize(function() {
    if ($(window).width() > 890 &&
        $('#nav-backdrop').height() > 0) {
        $('#nav-backdrop').fadeOut(320);
        $('#nav-backdrop').height(0);
    }
});


$( document ).ready(function() {
    $('h1').css("opacity",1);
    $('#request-booking-btn').animate({opacity:1}, 1300);
});

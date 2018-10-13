//manipulates the opacity of the mobile menu

$(function() {
    $('#mobile-menu-btn').click(function() {
        if ($('#nav-backdrop').height() == 0) {
            $('#nav-backdrop').fadeIn(220);
            $('#nav-backdrop').height($(document).height());
            $('#mobile-menu-btn').text("close");
        } else {
            $('#nav-backdrop').fadeOut(220, function() {
                $('#nav-backdrop').height(0);
            });
            $('#mobile-menu-btn').text("menu");
        }
    });
});


//the point on the page at which the nav-bg should show
if ($('.header-container') !== 'undefined') {
    var headerLocation = $('.header-container').find('h1').offset().top;
}


// adding nav-bg to navigation when scrolling down
window.onscroll = function() {

    // adding nav-bg to navigation when scrolling down
    if (headerLocation < 60) {
        if (window.pageYOffset > headerLocation -20) {
            $('#nav-bg').fadeIn(320);
        } else if ($('#nav-bg').height() < $(document).height()) {
            $('#nav-bg').fadeOut(320);
        }
    } else if (window.pageYOffset > headerLocation - 60) {
        $('#nav-bg').fadeIn(320);
    } else if ($('#nav-bg').height() < $(document).height()) {
        $('#nav-bg').fadeOut(320);
    }

    //displaying request booking btn - this should be based on the offset
    // of the booking request button in the header

    if (typeof page !== 'undefined') {
        var bookingButtonOffset = $('#request-booking-btn').offset().top;
        if (window.pageYOffset > bookingButtonOffset - 27) {
            $('#request-booking-btn-menu').css("opacity", 1);
            $('#request-booking-btn-menu').css("cursor", "pointer");
            $('#request-booking-btn-menu').css('visibility', 'visible');
        } else {
            $('#request-booking-btn-menu').css("opacity", 0);
            $('#request-booking-btn-menu').css('visibility', 'hidden');
        }
    } else {
        $('#request-booking-btn-menu').css("opacity", 1);
    }


}

// removing the navigation backdrop if screen size increases
$(window).resize(function() {
    if ($(window).width() > 890 &&
        $('#nav-backdrop').height() > 0) {
        $('#nav-backdrop').fadeOut(320);
        $('#nav-backdrop').height(0);
        $('#mobile-menu-btn').text("menu");
    }
});


// Request Booking Button opacity
$(document).ready(function() {
    $('h1').animate({ "opacity": 1 }, 1000);
    $('#request-booking-btn').animate({ opacity: 1 }, 1300);
    if (typeof page === 'undefined') {
        $('#request-booking-btn-menu').css("opacity", 1);
    }
});



//Function that opens a menu
$(function() {
    $('.menu-header').click(function() {
        $(this).parent().find('.menu-content').toggleClass('menu-content-open');
        $(this).parent().toggleClass('menu-open');
        $(this).parent().find('.arrow').toggleClass('arrow-down');
    });
});
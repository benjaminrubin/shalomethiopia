$(document).ready(function() {
    $('#bookingform').on('submit', function() {
        $('#bookingform').fadeOut(function() {
            $('#submission-message').fadeIn();
        });
    })
});
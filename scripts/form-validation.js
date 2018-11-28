function hasNumber(myString) {
    return /\d/.test(myString);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(document).ready(function() {


    $('#bookingform').on('submit', function() {
        $('#bookingform').fadeOut(function() {
            $('#submission-message').fadeIn();
        });
    })


    var nameValid = false;
    var emailValid = false;
    var cityValid = true;
    var countryValid = false;
    var phoneValid = true;
    var startValid = true;
    var endValid = true;

    // Full name validation
    $("#entry\\.95296602").change(function() {
        var name = document.forms["bookingform"]["entry.95296602"].value;
        if (name == "") {
            $("#entry\\.95296602").parent().find('.error-message').html("Name is required");
            nameValid = false;
        } else if (hasNumber(name)) {
            $("#entry\\.95296602").parent().find('.error-message').html("Name can't contain numbers");
            nameValid = false;
        } else {
            $("#entry\\.95296602").parent().find('.error-message').html("");
            nameValid = true;
        }
    });

    // Email validation
    $("#entry\\.1345085109").change(function() {
        var email = document.forms["bookingform"]["entry.1345085109"].value;
        if (email == "") {
            $("#entry\\.1345085109").parent().find('.error-message').html("Email is required");
            emailValid = false;
        } else if (!validateEmail(email)) {
            $("#entry\\.1345085109").parent().find('.error-message').html("Email must be valid");
            emailValid = false;
        } else {
            $("#entry\\.1345085109").parent().find('.error-message').html("");
            emailValid = true;
        }
    });


    // Phone validation
    $("#entry\\.2051240585").change(function() {
        var phone = document.forms["bookingform"]["entry.2051240585"].value;

        if (!/^\d+(-\d+)*$/.test(phone)) {
            $("#entry\\.2051240585").parent().find('.error-message').html("Phone number can only contain numbers and dashes (-)");
            phoneValid = false;
        } else {
            $("#entry\\.2051240585").parent().find('.error-message').html("");
            phoneValid = true;
        }
    });


    // City validation
    $("#entry\\.103209598").change(function() {
        var city = document.forms["bookingform"]["entry.103209598"].value;
        if (hasNumber(city)) {
            $("#entry\\.103209598").parent().find('.error-message').html("City can't contain numbers");
            cityValid = false;
        } else {
            $("#entry\\.103209598").parent().find('.error-message').html("");
            cityValid = true;
        }
    });


    // Country validation
    $("#entry\\.796581087").change(function() {
        var country = document.forms["bookingform"]["entry.796581087"].value;
        if (country == "") {
            $("#entry\\.796581087").parent().find('.error-message').html("Country is required");
            countryValid = false;
        } else if (hasNumber(country)) {
            $("#entry\\.796581087").parent().find('.error-message').html("Country can't contain numbers");
            countryValid = false;
        } else {
            $("#entry\\.796581087").parent().find('.error-message').html("");
            countryValid = true;
        }
    });


    var startDate;
    // Start Date validation
    $("#entry\\.1208074259").change(function() {
        var start = new Date(document.forms["bookingform"]["entry.1208074259"].value);
        var now = new Date();
        if (start < now) {
            $("#entry\\.1208074259").parent().find('.error-message').html("Start date must be in the future");
            startValid = false;
        } else {
            $("#entry\\.1208074259").parent().find('.error-message').html("");
            startValid = true;
        }
        startDate = start;
    });

    // End Date validation
    $("#entry\\.596499932").change(function() {
        var end = new Date(document.forms["bookingform"]["entry.596499932"].value);
        var now = new Date();
        if (end < startDate) {
            $("#entry\\.596499932").parent().find('.error-message').html("End date must be after start date");
            endValid = false;
        } else if (end < now) {
            $("#entry\\.596499932").parent().find('.error-message').html("End date must be in the future");
            endValid = false;
        } else {
            $("#entry\\.596499932").parent().find('.error-message').html("");
            endValid = true;
        }
    });



    //Validate date, conditions:
    //		- start date AND end date is not today or earlier
    //		- if there is an end date, then it should be at least one 
    //			after the start date





    $("#bookingform :input").change(function() {
        if (nameValid && emailValid && cityValid && countryValid && phoneValid && startValid && endValid) {
            $("#submit-btn").removeAttr("disabled");
        } else {
            $("#submit-btn").attr("disabled", true);
        }
    });


});


$(document).ready(function() {

});
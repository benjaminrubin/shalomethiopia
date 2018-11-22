function sysout(something) {
    console.log(something);
}

// Function to populate Ethiopia's current time
$(document).ready(function() {
    //Getting the time in Ethiopia
    var date = new Date();
    var period = "AM";
    // Ethiopia is three hours ahead of UTC
    var hr = (date.getUTCHours() + 3) % 12;
    var min = date.getUTCMinutes();
    if (hr > 12 && hr < 24) {
        period = "PM";
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr == 0) {
        hr = 12;
    }

    $('#ethiopia-time').html(hr + "<span class=\"blink-me\">:</span>" + min + " " + period);


    //Currency Conversion
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);

            var USD = obj['results']['USD_ETB']['val'].toFixed(2);
            var EUR = obj['results']['EUR_ETB']['val'].toFixed(2);

            var currency = "ETB = Ethiopian Birr <br/> " +
                "1 USD = " + USD + " ETB <br>" +
                "1 EUR = " + EUR + " ETB";
            $('#currency').html(currency);
        }
    };
    xhttp.open("GET", "https://free.currencyconverterapi.com/api/v6/convert?q=USD_ETB,EUR_ETB", true);
    xhttp.send();
});


var markers = [];
var geocoder;
var placeIds = {};






//Code relating to Google Maps API
function initMap() {
    var mapOptions = {
        zoom: 5.7,
        //this removes unnecessary controls
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        // zoomControl: false,

        //this is where the map is initially set to
        center: {
            lat: 10.100180,
            lng: 38.915677
        }

    }
    // Creating a new map
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    bounds = new google.maps.LatLngBounds();
    geocoder = new google.maps.Geocoder();

    placeIds['Addis Ababa'] = 'ChIJLUCr9c6FSxYRSU2iN7C2Z4Q';
    placeIds['Awassa'] = 'ChIJK7hnoHNFsRcRFo_bhZkaLKg';
    placeIds['Axum'] = 'ChIJ-2zCoL78axYR4awVoIPc0HQ';
    placeIds['Bahir Dar'] = 'ChIJaYDXBzPSRBYR-N8y9jSxsAo';
    placeIds['Erta Ale'] = 'ChIJa7-GnkJgFBYRGLm54re0yww';
    placeIds['Danakil Depression'] = 'ChIJc9CLsBlAExYRT9bupG-JLhk';
    placeIds['Lalibela Rock Churches'] = 'ChIJAy1Pge4-QRYRYkuugucUdPI';
    placeIds['Gondar'] = 'ChIJ304kPYIoQxYRZYqKNUViggc';
    placeIds['Key Afer'] = 'ChIJ_8Ne7AHxpBcRPJAUqaDsMlw';
    placeIds['Omo National Park'] = 'ChIJBZ2PzN5vphcRmI4vuHhp9ZQ';
    placeIds['Semien Mountains National Park'] = 'ChIJnfgWbdTBaRYRLWISc9-EAnc';


    var placeNumber = 1;




    for (const [key, value] of Object.entries(placeIds)) {
        // console.log(key + ": " + placeIds[key]);
        geocoder.geocode({ 'placeId': value }, function(results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    // map.setZoom(11);
                    // map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        title: key,
                        map: map,
                        position: results[0].geometry.location,
                        label: {
                            text: placeNumber.toString(),
                            color: "white"
                        }
                    });
                    markers.push(marker);
                    placeNumber++;
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
}








//Function that clicking on a destination displays the destionation's content
// while hiding the content of all other destinations. Additionally, the destination's
// pin turns green, as well as its corresponding pin on the map


$('.destination-container').click(function() {
    //if the content is not hidden, hide it
    if ($(this).find('.destination-content').is(":visible")) {
        $(this).find('.destination-content').hide();
    } else {
        $('.destination-container').find('.pin').removeClass('selected');
        $('.destination-container').find('.destination-content').hide();
        $(this).find('.destination-content').show();

        //center the map to the respective pin and slightly zoom in on it
    }
});



//Function for clicking on food items.
$('.food-container').click(function() {
    if ($(this).find('.food-overlay').is(":visible")) {
        $(this).find('.food-overlay').fadeOut(120);
        $(this).find('.food-description').fadeOut(120);
    } else {
        $(this).find('.food-overlay').fadeIn(120);
        $(this).find('.food-description').fadeIn(120);
    }


});
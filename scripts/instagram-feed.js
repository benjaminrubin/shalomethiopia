var token = '8031012796.ad8441c.6770778859fc445ea62c55f11f892d20', // learn how to obtain it below
    num_photos = 3; // how much photos do you want to get

$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: num_photos },
    success: function(data) {
        console.log(data);
        populate(data);
        // for( x in data.data ){
        // 	$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
        // 	// data.data[x].images.thumbnail.url - URL of image 150х150
        // 	// data.data[x].images.standard_resolution.url - URL of image 612х612
        // 	// data.data[x].link - Instagram post URL 
        // }
    },
    error: function(data) {
        console.log(data); // send the error notifications to console
    }
});



function populate(data) {
    for (x in data.data) {
    	$('#gallery-container').children('ul').append('<li><img class="photo" src="' + data.data[x].images.standard_resolution.url + '" onclick="window.open(\'' + data.data[x].link + '\')"></li>');
        // $('ul').append('<li><img src="' + data.data[x].images.low_resolution.url + '"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
        // 	// data.data[x].images.thumbnail.url - URL of image 150х150
        // 	// data.data[x].images.standard_resolution.url - URL of image 612х612
        // 	// data.data[x].link - Instagram post URL 
    }
}

var keyValue = "taylor+swift"

$.getJSON( "https://itunes.apple.com/search?term="+keyValue, function( response ) {
    var artist = response.results;
    console.log(artist)
});


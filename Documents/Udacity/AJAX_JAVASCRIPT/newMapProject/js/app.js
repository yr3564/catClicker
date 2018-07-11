var locationData = [
		{
			name : 'Centro Bellas Artes',
			latpos: '18.2387995',
			lngpos: '-66.0364577',
			description: ' Auditorium for Plays and Gatherings'
		},
		{
			name : 'Jardin Botanico',
			latpos: '18.2413485',
			lngpos: '-66.0614160',
			description: 'Botanical Garden'
		}]

var names = [];
var locationLat=[];
var locationLng=[];
var descript = [];


// Extract all base arrays
var locArrays = function (locationsData){
	var i = 0;

	for ( i=0; i < locationData.length; i ++ ){
		names.push(locationData.names);
		locationLat.push(locationData.latpos);
		locationLng.push(locationData.lngpos);
		descript.push(locationData.description);
	}
}





var map;
var markers = [];
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.2387995, lng: -66.0352490},
          zoom: 12
        });
        var largeInfowindow = new google.maps.InfoWindow();
}




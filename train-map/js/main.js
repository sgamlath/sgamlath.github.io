var markers=[];
var map;

function updateMap(){
  var Location = Parse.Object.extend("Location");
  var query = new Parse.Query(Location);
  query.find({
    success: function(results) {
      deleteMarkers();
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var userGeoPoint = object.get("loc");
        var infowindow = new google.maps.InfoWindow({
          content: (object.get("trainName")).concat("/",Math.round(object.get("speed")*18/5))
        });
        var myMarker = new google.maps.Marker({
          position: new google.maps.LatLng(userGeoPoint._latitude, userGeoPoint._longitude),
          map: map,
        });
        infowindow.open(map, myMarker);
        markers.push(myMarker)
      }
      setMapOnAll(map);
      setTimeout(updateMap, 5000);
    },
    error: function(error) {
      console.log("Error: " + error.code + " " + error.message);
      setTimeout(updateMap, 5000);
    }
  });

}
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}

  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(7.8578, 81.0000),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas, mapOptions);
  }
  Parse.initialize("lGi3e36YTg0ujCeSwqggXMmCqOvjQIwEWXwruYwT", "SDWSoOnXvwSqMZqRKjp5OLJXUEa9cs6JTI8moDGE");
  google.maps.event.addDomListener(window, 'load', initialize);
  updateMap();

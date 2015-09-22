var markers=[];
var map;
function setDummyData(){
  var DummyLocation = Parse.Object.extend("Location");
  var query = new Parse.Query(DummyLocation);
  var dummyLocation;
  query.equalTo("userId", "dummy");
  query.find({
    success: function(results) {
      console.log("total dummy locations "+results.length);
      if (results.length>0) {
        dummyLocation=results[0]
      }else {
        dummyLocation = new DummyLocation();
        dummyLocation.set("userId", 'dummy');
        var loc = new Parse.GeoPoint({latitude: 6.902250, longitude: 79.861314});
        dummyLocation.set("trainName", "TS0");
        dummyLocation.set("loc", loc);
    }
      dummyLocation.set("speed", Math.random()*20);
      dummyLocation.save(null, {
        success: function(dummyLocation) {
          // Execute any logic that should take place after the object is saved.
          // alert('New object created with objectId: ' + dummyLocation.id);
        },
        error: function(dummyLocation, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          // alert('Failed to create new object, with error code: ' + error.message);
        }
      });
  },
    error: function(error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });
}
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
          // title : 'hello world'
        });
        infowindow.open(map, myMarker);
        markers.push(myMarker)
      }
      setMapOnAll(map);
      // setDummyData();
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
  // Parse.initialize("lGi3e36YTg0ujCeSwqggXMmCqOvjQIwEWXwruYwT", "SDWSoOnXvwSqMZqRKjp5OLJXUEa9cs6JTI8moDGE");
  google.maps.event.addDomListener(window, 'load', initialize);
  // updateMap();

console.log("Main.js");

function initMap(){
  var map;
    const home = {lat: 33.7848894, lng: -84.40877130000001};
  map = new google.maps.Map(document.querySelector('#map'), {
    center: home,
    zoom: 14
  });
  var homeMarker = new google.maps.Marker({
    position: home,
    map: map,
    title: "Haddon House"
  });
}

var googleApi = document.createElement('script');
googleApi.type = 'text/javascript';
googleApi.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDPey_DMHli2p-rc-KUhNgAOI99BO9nx4Y&callback=initMap";
document.querySelector('head').appendChild(googleApi);

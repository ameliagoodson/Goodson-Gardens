// Contact form validation
$(document).ready(function () {
  $(".btn-contact").click(function (event) {
    event.preventDefault();

    var name = $(".name").val();
    var email = $(".email").val();
    var message = $(".message").val();
    var status = $(".status");
    status.empty();

    if (!name) {
      status.append("<div>Please enter a name</div>");
    }
    if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
      status.append("<div>Email is not valid</div>");
    }
    if (!message || message.length < 10) {
      status.append("<div>Please enter a message</div>");
    }
  });
});

// Google maps - Initialize and add the map
function initMap() {
  // The map, centered in Western Sydney
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: -33.849, lng: 150.911 },
  });
  // Define the LatLng coordinates for the polygon's (area's) path.
  var coords = [
    { lat: -33.711, lng: 150.311 }, //Katoomba
    { lat: -33.599626, lng: 150.75112 }, //Richmond
    { lat: -33.674698, lng: 151.348881 }, //Mona Vale
    { lat: -34.085418, lng: 151.250691 }, // Cronulla
    { lat: -34.064099, lng: 150.813298 }, // Campbelltown
  ];
  // Construct the polygon (geographic area)
  var businessArea = new google.maps.Polygon({
    paths: coords,
    strokeColor: "#506742",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#506742",
    fillOpacity: 0.35,
  });
  businessArea.setMap(map);
}

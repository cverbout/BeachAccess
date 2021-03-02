// 1.Create a map object and set the initial view point
var mymap = L.map('map', {
  center: [37.33, -120.93],
  zoom: 6,
  maxZoom: 10,
  minZoom: 3,
  zoomControl: false,
  detectRetina: true
});

// 2. move the zoom control to the top right corner.
new L.Control.Zoom({
  position: 'topright'
}).addTo(mymap);


// 3. Add a base map.
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

// 4. Declare three global variables for the wa counties thematic layer, bar chart, and the organized wa data.
var countiesLayer = null,
  bchart = null,
  counties = {};

// 5. load all datasets through promise mechnism and store them in an array
Promise.all([d3.json("data/coastalCounties.geojson")]).then(function(datasets) {

  // 6. Map relevant operations

  // 6.1 create a couties layer
  countiesLayer = L.geoJSON(datasets[0], {
    // onEachFeature: onEachFeature
  }).addTo(mymap);


});

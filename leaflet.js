let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
//the following code places a marker on the map
/*let bobstLibrary;
bobstLibrary = L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
*/
/*let bobstCoords;
bobstCoords = L.latLng(40.729444, -73.997222);
firstMap.panTo(bobstCoords);
//This is an example of the pan to method
let eiffelTower;
eiffelTower = L.latLng(48.858222, 2.2945);
firstMap.panTo(eiffelTower);
*/
//This is an example of a polyline / polygon shape
/*let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974],
                 [40.7309, -73.9974], [40.7309, -73.9976]];
tenThousandthPolygon = L.polygon(tenThousandth, {
                                  color: "#268bd2",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001],
              [washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);
*/

let washingtonSquarePark, washingtonSquareParkMarker, bobstLibrary, bobstLibraryMarker, waverlyPlace, waverlyPlaceMarker, unionSquare, unionSquareMarker, flatironBuilding, flatironBuildingMarker;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).bindPopup("This is Washington Square Park.").addTo(firstMap);
bobstLibrary = L.latLng(40.729444, -73.997222);
bobstLibraryMarker = L.marker(bobstLibrary).bindPopup("This is Bobst Library.").addTo(firstMap);
waverlyPlace = L.latLng(40.73449, -74.00358);
waverlyPlaceMarker = L.marker(waverlyPlace).bindPopup("I added another point, fools.").addTo(firstMap);
unionSquare = L.latLng(40.736255954922655, -73.99040375421184);
unionSquareMarker = L.marker(unionSquare).bindPopup("This is Union Square.").addTo(firstMap)
flatironBuilding = L.latLng(40.74168313064116, -73.98972272069204);
flatironBuildingMarker = L.marker(flatironBuilding).bindPopup("This is the Flatiron Building.").addTo(firstMap)
let circle;
circle = L.circle(washingtonSquarePark, {radius: 100,
                                         color: "#ffccff",
                                         fillColor: "#ffccff",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(bobstLibrary,          {radius: 100,
                                          color: "#ffccff",
                                          fillColor: "#ffccff",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(waverlyPlace,          {radius: 100,
                                          color: "#d33682",
                                          fillColor: "#d33682",
                                          opacity: 0.9,
                                          fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(unionSquare,           {radius: 100,
                                         color: "#FA763D",
                                         fillColor: "#ffccff",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);
circle = L.circle(flatironBuilding,      {radius: 100,
                                         color: "#FA763D",
                                         fillColor: "#ffccff",
                                         opacity: 0.9,
                                         fillOpacity: 0.20}
          ).addTo(firstMap);




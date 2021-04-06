// mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXlqYW5zZW52YW50bGFuZCIsImEiOiJja24wNXpqczQwaWhuMnZwY3hyZnhyMTdoIn0._1eOclNKBPecMf6NwdK7jQ';

var lat = -80.544444;
var long = 28.485833;
var red = "#E51736";
var green = "#00CC61";
var yellow = "yellow";
var pitch = 45;
var zoom = 5;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jimmyjansenvantland/ckn0d4vfu10m717prvb9wwjwi',
    center: [lat, long],
    zoom: zoom,
    pitch: pitch,
    attributionControl: false
});


var mapSatellite = new mapboxgl.Map({
    container: 'map-satellite',
    style: 'mapbox://styles/jimmyjansenvantland/ckn0flely13bk17p00yvajq69',
    center: [lat, long],
    zoom: zoom + 2,
    pitch: pitch,
    attributionControl: false
});

var mainLocationPopup = new mapboxgl.Popup({className: 'mapPopup', closeButton: false})
    .setHTML('<div class="mapPopupInner"><h3>Best Landing Option</h3><p>Cape Canaveral Air Force Station</p></div>');

var locationTwoPopup = new mapboxgl.Popup({className: 'mapPopup', closeButton: false})
    .setHTML('<div class="mapPopupInner"><h3>Landing Option 2</h3><p>Big Cypress Airfield-59FD</p></div>');

var locationThreePopup = new mapboxgl.Popup({className: 'mapPopup', closeButton: false})
    .setHTML('<div class="mapPopupInner"><h3>Landing Option 3</h3><p>R O Ranch Stolport</p></div>');

var locationFourPopup = new mapboxgl.Popup({className: 'mapPopup', closeButton: false})
    .setHTML('<div class="mapPopupInner"><h3>Landing Option 4</h3><p>Bibins Airport-GA47</p></div>');

var locationFivePopup = new mapboxgl.Popup({className: 'mapPopup', closeButton: false})
    .setHTML('<div class="mapPopupInner"><h3>Landing Option 5</h3><p>North-West Outcast Hunting Club Camp</p></div>');

var mainLocation = new mapboxgl.Marker({color: green})
    .setLngLat([lat, long])
    .setPopup(mainLocationPopup)
    .addTo(map);

var mainLocationSatellite = new mapboxgl.Marker({color: green})
    .setLngLat([lat, long])
    .setPopup(mainLocationPopup)
    .addTo(mapSatellite); // ik kreeg het niet voor elkaar om 2 'addto's in 1 variabele te krijgen.


var locationTwo = new mapboxgl.Marker({color: red})
    .setLngLat([-80.92246280934566, 26.30707608372658])
    .setPopup(locationTwoPopup)
    .addTo(map);

var locationThree = new mapboxgl.Marker({color: red})
    .setLngLat([-83.26606357837032, 29.914661485259018])
    .setPopup(locationThreePopup)
    .addTo(map);

var locationFour = new mapboxgl.Marker({color: red})
    .setLngLat([-82.27267212109552, 31.187696116645512])
    .setPopup(locationFourPopup)
    .addTo(map);

var locationFive = new mapboxgl.Marker({color: red})
    .setLngLat([-82.78151954227475, 30.76726093925179])
    .setPopup(locationFivePopup)
    .addTo(map);


var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// end mapbox

// start openweathermap

var temp = document.getElementById('temperature');
var cond = document.getElementById('condition');
var hum = document.getElementById('humidity');
var wins = document.getElementById('windSpeed');

function getAPIdata(){
    var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + long + '&lon=' + lat + '&appid=90f26e8dca5f5839000bc4dd7f83f79d';

    fetch(request)

    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
        temp.innerHTML = Math.floor(response.main.temp - 273.15);
        cond.innerHTML = response.weather[0].main;
        hum.innerHTML = response.main.humidity;
        wins.innerHTML = response.wind.speed;
    });
}

getAPIdata();


// end openweathermap

//temp.innerHTML = Math.floor(response.main.temp - 273.15);
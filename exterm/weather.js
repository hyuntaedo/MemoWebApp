const weather = document.querySelector('.js-weather');
const API_KEYS = "ec8f7d1c80a9f0dabe9678669b921738";
const COORDS = 'coords';

function getWeahter(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoScccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeahter(latitude, longitude);
}

function handleGeoError() {
    console.log('Cant access geo location');
}

function askForCord(){
    navigator.geolocation.getCurrentPosition(handleGeoScccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCord();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeahter(parseCoords.latitude,parseCoords.longitude);
    }
    
}

function init() {
    loadCoords();
}

init();
//weather block
const weatherBlock = document.querySelector('.wrapper');
let cityOfChoice = "Kyiv";
const opt = document.querySelectorAll('.option');

opt.forEach( l => {
    l.addEventListener('click', () => {
        cityOfChoice = l.querySelector('label').innerHTML;
        loadWeather();
    });
});

async function loadWeather(e) {
    weatherBlock.innerHTML = `
        <div class="weather-loading">
            <img src="../img/loading.gif" alt="loading...">
        </div>`;
    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityOfChoice}&appid=8c61455f2def13d4de3e7ea20f116876`;
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
    //data from openweathermap
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    //data output
    const template = `
    <div class="main-info">
        <div class="city">${location}</div>
        <div class="weather">${weatherStatus}</div>
        <div class="temp">${temp}&#176C</div>
        <div class="feels-like">Feels like: ${feelsLike}&#176C</div>
    </div>
    <div class="weather-icon">
        <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
    </div>`;

    weatherBlock.innerHTML = template;
}

if(weatherBlock) {
    loadWeather();
}
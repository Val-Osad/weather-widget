//weather block
const weatherBlock = document.querySelector('.wrapper');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
        <div class="weather-loading">
            <img src="../img/loading.gif" alt="loading...">
        </div>`;
    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=8c61455f2def13d4de3e7ea20f116876';
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
    //data output
    console.log(data);

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
}

if(weatherBlock) {
    loadWeather();
}

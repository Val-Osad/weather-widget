//weather block
const weatherBlock = document.querySelector('.wrapper');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
        <div class="weather-loading">
            <img src="../img/loading.gif alt="loading...">
        </div>`;
}

if(weatherBlock) {
    loadWeather();
}

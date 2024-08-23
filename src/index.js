function updateWeather(response){
let tempValue = document.querySelector("#temp-value");
let h1 = document.querySelector("#city");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humidity-value");
let windSpeed = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#real-time");
let date = new Date(response.data.time * 1000);
let icon = document.querySelector("#icon");

icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="temp-emoji"><img/>`;




tempValue.innerHTML = Math.round(response.data.temperature.current);
h1.innerHTML = response.data.city;
description.innerHTML = response.data.condition.description;
humidity.innerHTML = `${response.data.temperature.humidity}%`;
windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
timeElement.innerHTML = formatDate(date);
getForecast(response.data.city);
}

function formatDate(date){
    let hours = date.getHours();
    let mins = date.getMinutes();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];

    if (mins < 10){
        mins = `0${mins}`;
    }

    return `${day} ${hours}:${mins}`;
}

function searchCity(city){
    let apiKey ="b7d930477o00bba5cdf7a7taf17bc8ca";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit={metric}`;
    axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#entered-city");
    searchCity(searchInput.value);
}

function getForecast(city){
    let apiKey = "b7d930477o00bba5cdf7a7taf17bc8ca";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}}&key=${apiKey}`;
    axios(apiUrl).then(displayForecast);

}


function displayForecast(response){
let forecast = document.querySelector("#forecast");
let days = ["Sun","Mon","Tues","Wed","Thurs"];
let forecastHtml = "";
days.forEach(function(day) {
forecastHtml = forecastHtml +  `<div class="weather-forecast-day">
            <div class="wf-date">${day}</div> 
            <div class="wf-icon">🔆</div> 
            <div class="wf-temperatures">
                <div class="wf-temp"><strong>15</strong> </div>
                <div class="wf-temp">9</div>
            </div>
        </div>`;
       
});
forecast.innerHTML = forecastHtml;
}

let form = document.querySelector("#search-form");
console.log(form);
form.addEventListener("submit",handleSearchSubmit);

searchCity("Bremen");

function updateWeather(response){
let tempValue = document.querySelector("#temp-value");
let h1 = document.querySelector("#city");
let description = document.querySelector("#description");
let humidity = document.querySelector("#humidity-value");
let windSpeed = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#real-time");
let date = new Date(response.data.time * 1000);


tempValue.innerHTML = Math.round(response.data.temperature.current);
h1.innerHTML = response.data.city;
description.innerHTML = response.data.condition.description;
humidity.innerHTML = `${response.data.temperature.humidity}%`;
windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
timeElement.innerHTML = formatDate(date);
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

let form = document.querySelector("#search-form");
console.log(form);
form.addEventListener("submit",handleSearchSubmit);

searchCity("Bremen");
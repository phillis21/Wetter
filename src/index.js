function updateWeather(response){
let tempValue = document.querySelector("#temp-value");
let h1 = document.querySelector("#city");
    
h1.innerHTML = response.data.city;
tempValue.innerHTML = Math.round(response.data.temperature.current);
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
function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#entered-city");
    let h1 = document.querySelector("#city");
    h1.innerHTML = searchInput.value;
}

let form = document.querySelector("#search-form");
console.log(form);
form.addEventListener("submit",handleSearchSubmit);
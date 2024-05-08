let input = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");

function weatherFetch() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`))
}

let input = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let apiKey = "19f4935c8a63c46b4f5daedba0587955";


async function weatherFetch(cityName) {
    let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    console.log(weatherData);
    let jsonData = await weatherData.json();
    console.log(jsonData);
    city.innerhtml = input.value;
    temp.innerHTML = jsonData.main.temp;
}

function getData() {
    let cityName = input.value;
    weatherFetch(cityName);
}
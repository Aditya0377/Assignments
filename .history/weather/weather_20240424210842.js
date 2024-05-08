let input = document.getElementById("input");
let city = input.value;
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let apiKey = "19f4935c8a63c46b4f5daedba0587955";


async function weatherFetch(cityName) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);

}

function getData() {
    let cityName = input.value;
    weatherFetch(cityName);
}
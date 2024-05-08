let input = document.getElementById("input");
let city = input.value;
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let apiKey = "19f4935c8a63c46b4f5daedba0587955";

function weatherFetch() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then();
}

function geoSuccess(getCurrentPosition) {
    const latitude = 37.5459672; //위도
    const longitude = 126.8392197; //경도
    const API_KEY = "ddc0fae2b1a5c6a6063317d1902252a1";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((respone) => respone.json())
        .then((data) => {
            console.log(data);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            const apiWeather = data.weather[0].main;
            const apiCity = data.name;

            weather.innerText = apiWeather;
            city.innerText = apiCity;
        });

    console.log(getCurrentPosition);
}
function geoError() {
    alert("Weather API Error! Check your connect.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

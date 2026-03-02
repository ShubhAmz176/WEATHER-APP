const apiKey = "e5b36de29465abfbb30ed0fa4671d4ef"
// const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e5b36de29465abfbb30ed0fa4671d4ef&units=metric"
// const apiURL = "http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=e5b36de29465abfbb30ed0fa4671d4ef&q=delhi"

const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBar = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(cityName) {
    const response = await fetch(apiURL + `&appid=${apiKey}` + `&q=${cityName}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        const data = await response.json();

        // first displaying data to the console
        console.log(data);

        // writing the values in website llike temp, wind speed,humidity taken from the api

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

        // changing images

        const weatherIcon = document.querySelector(".weatherIcon")
        const whetherPic = data.weather[0].main;
        if (whetherPic == 'Clouds') {
            weatherIcon.src = "./ASSETS/images/clouds.png";
        }
        else if (whetherPic == 'Clear') {
            weatherIcon.src = "./ASSETS/images/clear.png";
        }
        else if (whetherPic == 'Rain') {
            weatherIcon.src = "./ASSETS/images/rain.png";
        }
        else if (whetherPic == 'Drizzle') {
            weatherIcon.src = "./ASSETS/images/drizzle.png";
        }
        else if (whetherPic == 'Mist') {
            weatherIcon.src = "./ASSETS/images/mist.png";
        }
        else if (whetherPic == 'Snow') {
            weatherIcon.src = "./ASSETS/images/snow.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

}

searchButton.addEventListener('click', () => {

    checkWeather(searchBar.value);  // take this argument from the searchBar input
})

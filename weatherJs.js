const apiKey = '2b99a566125585b71042545b20168791';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox =  document.querySelector(".search input");
const searchButton =  document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const baseAsests = "assests/";

async function checkWeather(city){
    const fullUrl = apiUrl + city + `&appid=${apiKey}`;
    const response = await fetch( fullUrl );
    if( response.status == 404 ){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        const data = await response.json();

    let cityName = document.querySelector(".city");
    cityName.textContent = city;

    let humidity = document.querySelector(".humidity");
    humidity.textContent = data.main.humidity+"%";

    let wind = document.querySelector(".wind");
    wind.textContent =  data.wind.speed+" Km/Hr";

    let temp = document.querySelector(".temp");
    temp.innerHTML =  Math.round(data.main.temp)+`&degC`;

    if( data.weather[0].main === "Clouds" ){
        weatherIcon.src = baseAsests+"images/clouds.png"
    }
    else if( data.weather[0].main === "Clear" ){
        weatherIcon.src = baseAsests+"images/clear.png"
    }
    else if( data.weather[0].main === "Rain" ){
        weatherIcon.src = baseAsests+"images/rain.png"
    }
    else if( data.weather[0].main === "Drizzle" ){
        weatherIcon.src = baseAsests+"images/drizzle.png"
    }
    else if( data.weather[0].main === "Mist" ){
        weatherIcon.src = baseAsests+"images/mist.png"
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    }

}
searchButton.addEventListener("click",()=> {
    checkWeather(searchBox.value);
})

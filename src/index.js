import './styles.css';
import '@fortawesome/fontawesome-free/css/all.css';


import { Application } from '@splinetool/runtime';


let splineUrl = 'https://prod.spline.design/kD00Q0lD47kFlGUA/scene.splinecode'
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load(splineUrl);


const city = document.getElementById('input');
const apiKey = '74c0bd858f2cf11b2ad2cbe09f247d59'



const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', async function weatherInfo(){

    const cityValue = city.value
    const temperature = document.getElementById('temp')
    const newCity = document.getElementById('researchCity')
    const humidityLevel = document.getElementById('humidity')
    const windSpeed = document.getElementById('wind')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`

    const weatherData = await fetch(url)
    if(weatherData.ok){
        const newData = await weatherData.json()
        console.log(newData)
        temperature.innerText = newData.weather[0].description;
        newCity.innerText = cityValue;
        humidityLevel.innerText = newData.main.humidity;
        windSpeed.innerText = newData.wind.speed;


        let splineUrl = '';

            if (newData.weather[0].description == 'clear sky') {
                splineUrl = 'https://prod.spline.design/p9FyhN5Pd0xgAFwl/scene.splinecode';
            } else if (
                newData.weather[0].description == 'few clouds: 11-25%' ||
                newData.weather[0].description == 'scattered clouds: 25-50%' ||
                newData.weather[0].description == 'broken clouds: 51-84%' ||
                newData.weather[0].description == 'overcast clouds: 85-100%'
            ) {
                splineUrl = 'https://prod.spline.design/BtsHuNjsqn4DGa48/scene.splinecode';
            } else if (
                newData.weather[0].description == 'light rain' ||
                newData.weather[0].description == 'moderate rain' ||
                newData.weather[0].description == 'heavy intensity rain' ||
                newData.weather[0].description == 'very heavy rain' ||
                newData.weather[0].description == 'extreme rain' ||
                newData.weather[0].description == 'freezing rain'
            ) {
                splineUrl = 'https://prod.spline.design/kD00Q0lD47kFlGUA/scene.splinecode';
            } else if (
                newData.weather[0].description == 'light intensity drizzle' ||
                newData.weather[0].description == 'drizzle' ||
                newData.weather[0].description == 'heavy intensity drizzle' ||
                newData.weather[0].description == 'light intensity drizzle rain' ||
                newData.weather[0].description == 'drizzle rain' ||
                newData.weather[0].description == 'heavy intensity drizzle rain' ||
                newData.weather[0].description == 'shower rain and drizzle' ||
                newData.weather[0].description == 'heavy shower rain and drizzle' ||
                newData.weather[0].description == 'shower drizzle'
            ) {
                splineUrl = 'https://prod.spline.design/kD00Q0lD47kFlGUA/scene.splinecode';
            } else if (
                newData.weather[0].description == 'thunderstorm with light rain' ||
                newData.weather[0].description == 'thunderstorm with rain' ||
                newData.weather[0].description == 'thunderstorm with heavy rain' ||
                newData.weather[0].description == 'light thunderstorm' ||
                newData.weather[0].description == 'thunderstorm' ||
                newData.weather[0].description == 'heavy thunderstorm' ||
                newData.weather[0].description == 'ragged thunderstorm' ||
                newData.weather[0].description == 'thunderstorm with light drizzle' ||
                newData.weather[0].description == 'thunderstorm with drizzle' ||
                newData.weather[0].description == 'thunderstorm with heavy drizzle'
            ) {
                splineUrl = 'https://prod.spline.design/tReVQx3TvGNjShxq/scene.splinecode';
            } else if (
                newData.weather[0].description == 'light snow' ||
                newData.weather[0].description == 'Snow' ||
                newData.weather[0].description == 'heavy snow' ||
                newData.weather[0].description == 'sleet' ||
                newData.weather[0].description == 'light shower sleet' ||
                newData.weather[0].description == 'shower sleet' ||
                newData.weather[0].description == 'light rain and snow' ||
                newData.weather[0].description == 'rain and snow' ||
                newData.weather[0].description == 'light shower snow' ||
                newData.weather[0].description == 'shower snow' ||
                newData.weather[0].description == 'heavy shower snow'
            ) {
                splineUrl = 'your_snow_spline_url';
            } else if (
                newData.weather[0].description == 'mist' ||
                newData.weather[0].description == 'smoke' ||
                newData.weather[0].description == 'haze' ||
                newData.weather[0].description == 'sand/dust whirls' ||
                newData.weather[0].description == 'fog' ||
                newData.weather[0].description == 'sand' ||
                newData.weather[0].description == 'dust' ||
                newData.weather[0].description == 'volcanic ash' ||
                newData.weather[0].description == 'squalls' ||
                newData.weather[0].description == 'tornado'
            ) {
                splineUrl = 'https://prod.spline.design/CUSpDy3Zu6sQGveM/scene.splinecode';
            } else {
                splineUrl = 'https://prod.spline.design/HpeS6JEAKu9X-nUy/scene.splinecode'; // Default URL if no match is found
            }
            return splineUrl
    }
    else{
        console.log('Error detailing data')
    }
});




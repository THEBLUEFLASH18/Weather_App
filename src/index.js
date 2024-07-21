import './styles.css';
import '@fortawesome/fontawesome-free/css/all.css';


import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/kD00Q0lD47kFlGUA/scene.splinecode');


const city = document.getElementById('input');
const apiKey = '74c0bd858f2cf11b2ad2cbe09f247d59'

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', async function weatherInfo(){

    const cityValue = city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}`

    const weatherData = await fetch(url)
    if(weatherData.ok){
        const newData = await weatherData.json()
        console.log(newData)
    }
    else{
        console.log('Error detailing data')
    }
});




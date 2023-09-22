// async function getWeatherLocation(){
//     // const apiKey = '9171d74121310cf9012919e48f92262a';
//     // const city = 'London';
//     // const response = await fetch(`https://www.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`);
//     // const weatherLocationData = await response.json();

//     // console.log(weatherLocationData)
// }
// getWeatherLocation();

function displayLocation(){
    const cityElement = document.getElementById("cityInput");

    const cityText = cityElement.value;

    const displayElement = document.getElementById("displayWeather");

    const location = document.getElementById('location');

    console.log(cityText)

    // displayElement.textContent = cityText;

    fetch(`https://api.weatherapi.com/v1/current.json?key=02614ce3018e4c068d981948232209&q=${cityText}&aqi=yes`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const capitalizedCity = cityText.charAt(0).toUpperCase() + cityText.slice(1);


        location.textContent = capitalizedCity;

        displayElement.textContent = data.current.temp_f;
    })

    cityElement.value = ''
}
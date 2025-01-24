const inputbox = document.querySelector('#name');
const image = document.querySelector('.img');
const button = document.querySelector('button');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humid');
const wind = document.querySelector('.windspeed');
const location_not_found = document.querySelector('.location-not-found');
const location_found = document.querySelector('.Location'); 

async function checkWeather(city){
	const api_key = 'cda7f8e17eb89a82f7de53bb390f6c65';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
	const weatherapi = await fetch(`${url}`).then(response => response.json());
	if(weatherapi.cod === '404'){
		location_not_found.style.display = 'flex';
		location_found.style.display = 'none';
		console.log("error");
		return;
	}
	location_not_found.style.display = 'none';
	location_found.style.display = 'block';

	
	
	
	temperature.innerHTML = `${Math.round(weatherapi.main.temp - 273.15)}°C`;
	description.innerHTML = `${weatherapi.weather[0].description}`;
	humidity.innerHTML = `${weatherapi.main.humidity}%`;
	wind.innerHTML = `${weatherapi.wind.speed}Km/H`;

	switch(weatherapi.weather[0].main){
		case 'Clouds':
			image.src = 'assests/cloud.png';
			break;
		
		case 'Clear':
			image.src = 'assests/clear.png';
			break;
		
		case 'Haze':
			image.src = 'assests/mist.png';
			break;

		case 'Mist':
			image.src = 'assests/mist.png';
			break;
		
		case 'Rain':
			image.src = 'assests/rain.png';
			break;

		case 'Drizzle':
			image.src = 'assests/rain.png';
			break;c
		
		case 'Snow':
			image.src = 'assests/snow.png';
			break;
	}
}

button.addEventListener('click', () => {
	checkWeather(inputbox.value);
});
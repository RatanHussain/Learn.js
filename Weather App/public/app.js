/** @format */

let imgCondition = document.getElementById('imgCondition');
let city = document.getElementById('city');
let haze = document.getElementById('haze');
let temp = document.getElementById('temp');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');
let search = document.getElementById('search');
let API = 'aac15c6a4ca1b0803073ec55099a595d';
let base_url = `https://api.openweathermap.org/data/2.5/weather?appid=${API}`;
let icon = `https://openweathermap.org/img/wn/`;
let defoultCity = 'Riyadh,sa';

document.addEventListener('DOMContentLoaded', function (e) {
	navigator.geolocation.getCurrentPosition(
		(place) => {
			getWeatherData(null, place.coords);
		},
		(e) => {
			getWeatherData();
		}
	);
});

function getWeatherData(city = defoultCity, coords) {
	let url = base_url;
	city === null
		? (url = `${url}&lat=${coords.latitude}&long=${coords.longitude}`)
		: (url = `${url}&q=${city}`);

	axios
		.get(url)
		.then((respose) => {
			console.log(respose);
		})
		.catch((error) => console.log(error));
}

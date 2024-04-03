/** @format */

let API = 'key=9bcf311b051e4e9d863141943240304';

let url = `http://api.weatherapi.com/v1/current.json?`;
let citty = '&q=Riyadh';

function getLocationdata() {
	navigator.geolocation.getCurrentPosition(
		(locat) => {
			fetch(`${url}${API}&q=${locat.coords.latitude},${locat.coords.longitude}`)
				.then((respose) => respose.json())
				.then((res) => console.log(res))
			.catch(e => console.log(e.message))
		},
		(error) => {
			console.log(error);
		}
	);
}

getLocationdata()

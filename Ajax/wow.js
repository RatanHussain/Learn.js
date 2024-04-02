
let API = '&appid=aac15c6a4ca1b0803073ec55099a595d';

let url = `https://api.openweathermap.org/data/2.5/weather?`
// lat={lat}&lon={lon}


function getLocationdata() {
    navigator.geolocation.getCurrentPosition(called => {
        let link = `${url}lat=${called.coords.latitude}&lon=${called.coords.longitude}${API}`
        console.log(link)
        fetch(link)
        .then(res => res.json())
            .then(resu => console.log(resu))
        .catch(er => console.log(er))
    })
}

getLocationdata()

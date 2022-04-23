const API_KEY = "6e0ef6ba01570f9f01e5c3bd07c7f021";


function onGeoOk(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log("You live it", lat, lon);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
	console.log(url);
	fetch(url)
	.then((res) => res.json())
	.then((data) => {
		const weatherContainer = document.querySelector(".weather");
		const cityContainer = document.querySelector(".city");
		const name = data.name;
		const weather =  data.weather[0].main;

		cityContainer.innerText = `현재 위치 : ${name}`;
		weatherContainer.innerText = `지금 날씨 : ${weather}`;
		console.log(cityContainer.innerText)
		console.log(weatherContainer.innerText)
		// console.log(data.name, data.weather[0].main)
	});
	console.log(url);
	// console.log(`내가 사는 곳 : ${url.weather}`)
}



function onGeoError(){
	alert("can't find you. no weather for you")	
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
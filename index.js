const request = require('request');
var apikey = '01b37d95e78c5c6ae9d9bdbeb69eb3ce';

var Location =`Chennai`;
const forecast = function() {

var url = `http://api.openweathermap.org/data/2.5/weather?`
			+`q=${Location}&appid=${apikey}`

	request({ url: url, json: true }, function (error, response) {
		if (error) {
			console.log('Unable to connect to Forecast API');
		}
		else {
            // Value is in Kelvin so we need to convert it to Celsius
			console.log('It is currently '+ Math.round(response.body.main.temp - 273.15)+ '°C degrees out.');
			console.log('The high today is '+ Math.round(response.body.main.temp_max - 273.15)+ '°C'+ ' with a low of '+ Math.round(response.body.main.temp_min - 273.15) + '°C');
			console.log('Humidity today is ' + response.body.main.humidity + '%');
            console.log('Feels Like : ' + Math.round(response.body.main.feels_like - 273.15) + '°C');
            console.log('Cords Of the loction : ' + (response.body.coord.lat) + ',' + (response.body.coord.lon));
            console.log('Weather Description : ' + response.body.weather[0].description);
            console.log('Weather Icon : ' + response.body.weather[0].icon);
            console.log('Wind Speed : ' + response.body.wind.speed);
            console.log('Wind Direction : ' + response.body.wind.deg);
            console.log('Cloudiness : ' + response.body.clouds.all);
            console.log('Pressure : ' + response.body.main.pressure);
            console.log('Sunrise : ' + response.body.sys.sunrise);
            console.log('Sunset : ' + (response.body.sys.sunset));
            console.log('Country : ' + response.body.sys.country);
            console.log('City : ' + response.body.name);
            console.log('Timezone : ' + response.body.timezone);
			
            
            
		}
	})
}



// Function call
forecast();


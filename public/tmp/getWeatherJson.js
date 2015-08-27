var http = require('http');
var request = require('request');
var fs = require('fs');

function getWeatherJson() {
	//pm25.in数据
	request('http://www.pm25.in/api/querys/aqi_details.json?city=beijing&token=5j1znBVAsnSf5xQyNQyq&stations=no', function(error, response, body) {
		//request('http://www.pm25.in/api/querys/aqi_ranking.json?&token=5j1znBVAsnSf5xQyNQyq', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			//console.log(body);
			var info = JSON.parse(body);
			//console.log(!info[0].aqi);
			if (!info[0]) {

			} else {
				fs.writeFile('./pm25.json', body, function(err) {
					if (err) {
						throw err;
					};
				});
			};
		}
	})

	//小米
	request('http://weatherapi.market.xiaomi.com/wtr-v2/weather?cityId=101010100', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			//console.log(body);
			fs.writeFile('./xiaomi.json', body, function(err) {
				if (err) {
					throw err;
				};
			});
		}
	})
}

getWeatherJson();

var num = 0;
console.log(num + ": " + Date());
setInterval(function() {
	num = num + 1;
	console.log(num + ": " + Date());
	getWeatherJson();
}, 3600 * 1000)
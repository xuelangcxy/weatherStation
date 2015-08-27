var http = require('http');
var request = require('request');
var fs = require('fs');

/*http.request("http://www.pm25.in/api/querys/pm10.json?city=beijing&token=5j1znBVAsnSf5xQyNQyq&stations=no", function(err, res, body){
	console.log("success");
	var data = JSON.parse(body);
	console.log(data);
})*/

//pm25.in数据
request('http://www.pm25.in/api/querys/aqi_details.json?city=beijing&token=5j1znBVAsnSf5xQyNQyq&stations=no', function(error, response, body) {

//中国天气网数据
//request('http://xoap.weather.com/weather/local/CHXX0138?cc=*&unit=m&dayf=2&link=xoap&prod=xoap&par=1220552427&key=c168fcf83120f8ed', function(error, response, body) {

//yahoo天气数据
//request('http://xml.weather.yahoo.com/forecastrss?w=2163866&u=c', function(error, response, body) {

//360数据
//request('http://cdn.weather.hao.360.cn/api_weather_info.php?app=hao360&_jsonp=smartloaddata101190101&code=101190101', function(error, response, body) {

//小米
//request('http://weatherapi.market.xiaomi.com/wtr-v2/weather?cityId=101010100', function(error, response, body) {

//request('http://www.weather.com.cn/data/sk/101010100.html', function(error, response, body) {

	//request('http://pm25.moji001.com/aqi/index-1623.html', function(error, response, body) {

//新浪天气数据	
//request('http://php.weather.sina.com.cn/xml.php?city=%B1%B1%BE%A9&password=DJOYnieT8234jlsK&day=0', function(error, response, body) {

	//中华万年历
	//request('http://weather.51wnl.com/weatherinfo/GetMoreWeather?cityCode=101010100&weatherType=0', function(error, response, body) {

if (!error && response.statusCode == 200) {
	/*var info = JSON.parse(body);
	console.log(info);*/
	//console.log("pm2.5含量：" + info[0].pm2_5 + "ug/m3");
	console.log(body);
	fs.writeFile('../tmp/t.json', body, function(err) {
		if (err) {
			throw err;
		};
		fs.readFile('../tmp/t.json', function(err, data) {
			if (err) throw err;
			//console.log(JSON.parse(data));
			var weatherinfo = JSON.parse(data);
			console.log(weatherinfo);

			if (!info[0]) {
					$(function(){
						$('div.live_data_time').html(weatherinfo.info);
					})
					/*AQI: info,
					area: info,
					CO: info,
					NO2: info,
					O3: info,
					pm10: info,
					pm2_5: info,
					quality: info,
					SO2: info,
					time: info,*/				
			} else {
				var re1 = /[0-9]+-[0-9]+-[0-9]+/;
				var re2 = /[0-9]+:[0-9]+:[0-9]+/;
				var time = re1.exec(info[0].time_point) + '  ' + re2.exec(info[0].time_point);
				$(function(){
						$('div.live_data_time').html(time);
					})
					/*title: 'weather',
					AQI: info[0].aqi,
					area: info[0].area,
					CO: info[0].co,
					NO2: info[0].no2,
					O3: info[0].o3,
					pm10: info[0].pm10,
					pm2_5: info[0].pm2_5,
					quality: info[0].quality,
					SO2: info[0].so2,
					time: time,*/
			};


		})
	});
}
})
/*var options = {
	url: 'http://www.pm25.in/api/querys/pm10.json?city=beijing&token=5j1znBVAsnSf5xQyNQyq&stations=no',
	method: 'GET'
};

function callback(error, response, body){
	if (!error && response.statusCode == 200){
		var info = JSON.parse(body);
		console.log(info);
	}
}

request(options, callback);*/
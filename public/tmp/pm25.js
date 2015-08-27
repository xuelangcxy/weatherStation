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
	//request('http://www.pm25.in/api/querys/aqi_ranking.json?&token=5j1znBVAsnSf5xQyNQyq', function(error, response, body) {

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
	fs.writeFile('./pm25.json', body, function(err) {
		if (err) {
			throw err;
		};
		fs.readFile('./pm25.json', function(err, data) {
			if (err) throw err;
			//console.log(JSON.parse(data));
			var weatherinfo = JSON.parse(data);
			console.log(weatherinfo);

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
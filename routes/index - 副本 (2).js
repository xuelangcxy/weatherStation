var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('home', { title: 'weatherStation | 我的空气小站' });
});*/

router.get('/', function(req, res, next) {
	/*console.log("pm2.5含量：" + info[0].pm2_5 + "ug/m3");*/
	//console.log(body);
	/*fs.writeFile('./t.json', body, function(err) {
		if (err) {
			throw err
		};
		fs.readFile('./t.json', function(err, data) {
			if (err) throw err;
			console.log(JSON.parse(data));
		})
	});*/
	fs.readFile('./public/tmp/pm25.json', function(err, data) {
			if (err) throw err;
			var info = JSON.parse(data);
			fs.readFile('./public/tmp/xiaomi.json', function(err, data) {
				if (err) throw err;
			//console.log(JSON.parse(data));
			var index = JSON.parse(data);
			var re1 = /[0-9]+-[0-9]+-[0-9]+/;
			var re2 = /[0-9]+:[0-9]+:[0-9]+/;
			var time = re1.exec(info[0].time_point) + '  ' + re2.exec(info[0].time_point);

			//判断AQI分级情况
			var aqi = info[0].aqi;
			var level = " ";
			if (aqi > 0 && aqi <= 50) {
				level = "一";
			} else if (aqi > 50 && aqi <= 100) {
				level = "二";
			} else if (aqi > 100 && aqi <= 150) {
				level = "三";
			} else if (aqi > 150 && aqi <= 200) {
				level = "四";
			} else if (aqi > 200 && aqi <= 300) {
				level = "五";
			} else if (aqi > 300) {
				level = "六";
			} else {
				level = " ";
			}

			res.render('home', {
				title: 'weatherStation | 我的空气小站',
				AQI: info[0].aqi,
				area: info[0].area,
				CO: info[0].co,
				NO2: info[0].no2,
				O3: info[0].o3,
				pm10: info[0].pm10,
				pm2_5: info[0].pm2_5,
				quality: info[0].quality,
				SO2: info[0].so2,
				time: time,
				level: level,
			});
		})
})
		/*if (!info[0]) {
			res.render('home', {
				title: 'weatherStation | 我的空气小站',
				AQI: info,
				area: info,
				CO: info,
				NO2: info,
				O3: info,
				pm10: info,
				pm2_5: info,
				quality: info,
				SO2: info,
				time: info,
				level: "null",
			});
		} else {
			var re1 = /[0-9]+-[0-9]+-[0-9]+/;
			var re2 = /[0-9]+:[0-9]+:[0-9]+/;
			var time = re1.exec(info[0].time_point) + '  ' + re2.exec(info[0].time_point);

			//判断AQI分级情况
			var aqi = info[0].aqi;
			var level = " ";
			if (aqi > 0 && aqi <= 50) {
				level = "一";
			} else if (aqi > 50 && aqi <= 100) {
				level = "二";
			} else if (aqi > 100 && aqi <= 150) {
				level = "三";
			} else if (aqi > 150 && aqi <= 200) {
				level = "四";
			} else if (aqi > 200 && aqi <= 300) {
				level = "五";
			} else if (aqi > 300) {
				level = "六";
			} else {
				level = " ";
			}

			res.render('home', {
				title: 'weatherStation | 我的空气小站',
				AQI: info[0].aqi,
				area: info[0].area,
				CO: info[0].co,
				NO2: info[0].no2,
				O3: info[0].o3,
				pm10: info[0].pm10,
				pm2_5: info[0].pm2_5,
				quality: info[0].quality,
				SO2: info[0].so2,
				time: time,
				level: level,
			});
		};*/

});

router.get('/introduction', function(req, res, next) {
	res.render('introduction', {
		title: 'weatherStation | 介绍我的空气小站'
	});
});

router.get('/about', function(req, res, next) {
	res.render('about', {
		title: 'weatherStation | 关于我的空气小站'
	});
});

module.exports = router;
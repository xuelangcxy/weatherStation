$(document).ready(function() {

	$.getJSON('../tmp/pm25.json', function(data) {
		var info = data;
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

		$('#area').html(info[0].area);
		$('#level').html(level);
		$('#quality').html(info[0].quality);
		$('#time').html(time);

		$('#AQI').html(aqi);

		$('#pm2_5').html(info[0].pm2_5);
		$('#pm10').html(info[0].pm10);
		$('#CO').html((info[0].co).toFixed(2));
		$('#NO2').html(info[0].no2);
		$('#SO2').html(info[0].so2);
		$('#O3').html(info[0].o3);

		var primary_pollutant = info[0].primary_pollutant;
		if (primary_pollutant == "") {
			$('#primary_pollutant').html("无");
		} else{
		$('#primary_pollutant').html(primary_pollutant);
	}
	})

	$.getJSON('../tmp/xiaomi.json', function(data) {
			var index = data;
			//console.log(index.forecast.img1);
			//$('#forecast').attr("src", index.forecast.img1);
			for (var i = 0, l = index.index.length; i < l; i++) {
				switch (index.index[i].code) {
					case "fs":
						$('#fs_level').html(index.index[i].index);
						$('#fs_advise').html(index.index[i].details);
						break;
					case "ct":
						$('#cy_level').html(index.index[i].index);
						$('#cy_advise').html(index.index[i].details);
						break;
					case "yd":
						$('#yd_level').html(index.index[i].index);
						$('#yd_advise').html(index.index[i].details);
						break;
					case "xc":
						$('#xc_level').html(index.index[i].index);
						$('#xc_advise').html(index.index[i].details);
						break;
					case "ls":
						$('#ls_level').html(index.index[i].index);
						$('#ls_advise').html(index.index[i].details);
						break;
				}
			};

			var name = new Array("晴","多云","阴","阵雨","雷阵雨","雷阵雨并伴有冰雹","雨加雪","小雨","中雨","大雨","暴雨","大暴雨","特大暴雨","阵雪","小雪","中雪","大雪","暴雪","雾","冻雨","沙尘暴","小雨-中雨","中雨-大雨","大雨-暴雨","暴雨-大暴雨","大暴雨-特大暴雨","小雪-中雪","中雪-大雪","大雪-暴雪","浮尘","扬沙","强沙尘暴","没有数据");
			for (var i = 0; i < name.length; i++) {
				if (index.realtime.weather == name[i]) {
					$('#realtime_weather_pic').attr("src", "images/weather/a_" + i + ".gif");
				};
			};

			$('#realtime_temp').html(index.realtime.temp);
			$('#realtime_weather').html(index.realtime.weather);
			$('#realtime_humidity').html(index.realtime.SD);
			$('#wind').html(index.realtime.WD);
			$('#wind_level').html(index.realtime.WS);
			$('#update_time').html(index.realtime.time);

		})
		/*$('#forecast').attr("src", "images/spring.jpg");*/

})
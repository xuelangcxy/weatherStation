var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('home', { title: 'weatherStation | 我的空气小站' });
});*/

router.get('/', function(req, res, next) {
	res.render('home', {
		title: 'weatherStation | 我的空气小站',
	});
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
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'weatherStation | 我的空气小站' });
});

module.exports = router;

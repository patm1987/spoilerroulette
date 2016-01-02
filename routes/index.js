var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spoiler Roulette', spoiler: 'Grand Moff is Luke\'s uncle!' });
});

module.exports = router;

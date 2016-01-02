var express = require('express');
var SpoilerProvider = require('../spoiler_provider');
var router = express.Router();
var spoilerProvider = new SpoilerProvider();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Spoiler Roulette', spoiler: spoilerProvider.getSpoiler() });
});

module.exports = router;

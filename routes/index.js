var express = require('express');
var SpoilerProvider = require('../spoiler_provider');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var spoilerProvider = new SpoilerProvider();
	spoilerProvider.getSpoiler(function(spoilerTitle, spoilerBody) {
		res.render('index', {
			title: 'Spoiler Roulette',
			spoilerTitle: spoilerTitle,
			spoiler: spoilerBody
		});
	});
});

module.exports = router;

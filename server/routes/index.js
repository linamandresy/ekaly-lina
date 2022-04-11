var express = require('express');
var router = express.Router();
var sendMail = require("../helper/EmailHelper");

/* GET home page. */
router.get('/', function (req, res, next) {
	res.sendFile('index.html', { root: './public/app' });
});

module.exports = router;

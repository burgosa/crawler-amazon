var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require("./config");

if (process.env.ENV === 'live') require('newrelic');


require('./routes').init(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'accept, content-type');
	req.header('Content-Type', 'application/json');
	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.listen(3000, function() {
	console.log('app listening on port 3000');
});
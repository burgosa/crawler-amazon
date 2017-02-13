var controllers = require('./controllers');


exports.init = function(app) {

	//Home Route
	app.get('/', controllers.Home.home);

	app.get('/crawler', controllers.Crawler.crawler);


};
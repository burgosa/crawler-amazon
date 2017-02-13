var Controller = function() {};

Controller.prototype.home = function(req, res) {
	res.send({
		server: 'Crawler 2017',
		status: 'OK',
		time: new Date()
	});
};

module.exports = new Controller();
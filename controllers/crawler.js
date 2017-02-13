var Controller = function() {};
var jsdom = require("jsdom");

Controller.prototype.crawler = function(req, res) {

	var brand = 'Rolex';
	var term = 'Daytona';
	var condition = 'new';

	var url_to_crawl = 'https://www.amazon.com/s/ref=sr_nr_p_89_0?fst=as%3Aoff%2Cp90x%3A1&rh=n%3A7141123011%2Cn%3A5777491011%2Ck%3Adaytona%2Cp_89%3A' + brand + ' &bbn=5777491011&keywords=' + term;

	

	jsdom.env( url_to_crawl, ["http://code.jquery.com/jquery.js"], function (err, window) {
		var products = [];
		var $ = window.$;
		$(".s-result-item").each(function() {

			var name = $(this).find('h2.a-size-small').text();
			var price = $(this).find('span.a-size-small.s-padding-right-micro').text();
		
			products.push({
				name: name,
				price: price,

			})
		});

		res.send(products);

	});
};

module.exports = new Controller();
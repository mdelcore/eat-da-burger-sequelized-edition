var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Burger.findAll({}).then(function(data) {
			res.render("index", {
				burgers: data
			});
		});
	});

	app.post("/", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger
		}).then(function(data) {
			res.redirect("/");
		});
	});

	app.put("/", function(req, res) {
		db.Burger.update({
			devoured: true
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(data) {
			res.redirect("/");
		});
	});
};
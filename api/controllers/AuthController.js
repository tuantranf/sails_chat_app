/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */
var hasher = require("password-hash");

module.exports = {

	signup: function (req, res) {
		var username = req.param("username");
		var password = req.param("password");

		User.findOneByUsername(username).done(function(err, usr){
			if (err) {
				res.send(500, "DB Error");
			} else if (usr) {
				res.send(400, "Username already Taken");
			} else {
				password = hasher.generate(password);
				User.create({username: username, password: password}).done(function(error, user) {
					if (error) {
						res.send(500, "DB Error");
					} else {
						req.session.user = user;
						res.send(user);
					}
				});
			}
		});
	},

	login: function (req, res) {
		var username = req.param("username");
		var password = req.param("password");

		User.findOneByUsername(username).done(function(err, usr) {
			if (err) {
				res.send(500, "DB Error");
			} else {
				if (usr) {
					if (hasher.verify(password, usr.password)) {
						req.session.user = usr;
						res.send(usr);
					} else {
						res.send(400, "Wrong Password");
					}
				} else {
					res.send(404, "User not Found");
				}
			}
		});
	},

	logout: function (req, res) {

		req.session.user = null;
		res.redirect('/');
	}


};

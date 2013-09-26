/**
 * MainController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */
var hasher = require("password-hash");

module.exports = {

	index: function (req, res) {
		res.view();
	}

};
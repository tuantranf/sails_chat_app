/**
 * MainController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

	index: function (req, res) {
		res.view();
	},

	chat: function (req, res) {
		if (req.session.user) {
			res.view({username: req.session.user.username});
		} else {
			res.redirect('/');
		}
	}

};
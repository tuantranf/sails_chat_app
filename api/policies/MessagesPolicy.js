module.exports = function (req, res, next) {
		console.log(req.session.user)

	if (req.session.user) {
			var action = req.target.action;
		if (action === "create") {
			console.log('asdf')
			req.body.userId = req.session.user.id;
			req.body.username = req.session.user.username;
		}
		next();
	} else {
		res.send("You Must Be Logged In", 403);
	}
};
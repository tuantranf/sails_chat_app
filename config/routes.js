/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {
	'/' : {
		controller: 'main',
		action: 'index'
	},
	'/signup' : {
		controller: 'user',
		action: 'signup'
	},
	'/login' : {
		controller: 'user',
		action: 'login'
	},
	'/logout' : {
		controller: 'user',
		action: 'logout'
	},
};
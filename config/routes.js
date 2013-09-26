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
	'/chat' : {
		controller: 'main',
		action: 'chat'
	},
	'/signup' : {
		controller: 'auth',
		action: 'signup'
	},
	'/login' : {
		controller: 'auth',
		action: 'login'
	},
	'/logout' : {
		controller: 'auth',
		action: 'logout'
	}

};
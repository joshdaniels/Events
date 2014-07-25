var Router = Backbone.Router.extend ({

	routes: {
		'' : 'home',
		'login' : 'login',
		'admin/:id' : 'admin',
		'band/:id' : 'band',
		'concert/:id' : 'displayConcert',
		'addEvent' : 'addEvent',
		'addband' : 'addBand'
	},

	home: function () {
	 new ConcertView({ collection: all_concerts});
	}
});



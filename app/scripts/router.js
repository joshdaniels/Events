var Router = Backbone.Router.extend ({
		routes: {
			'' : 'signUp',
			'login' : 'login',
			'admin/:id' : 'admin',
			'concert/:id': 'displayConcert',
			'concert/' :  'addConcert'
		},

		signUp: function () {
				new ConcertListView({ collection: all_concerts});
				$('.form1').show();
		},

		displayConcert: function (id){
				new IndividualConcertView({ concertid: id, collection: all_concerts});
		},

		addConcert: function(){
				$('.form1').hide();
				$('.fomr2').hide();
				$('.concert_form').hide();
				$('.concert_content').show();
		}

});

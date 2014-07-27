var Router = Backbone.Router.extend ({
		routes: {
			'' : 'signUp',
			'login' : 'login',
			'admin/:id' : 'admin',
			'concert/:id': 'displayConcert',
			'concert/' :  'addConcert'
		},

		signUp: function () {
				new SignupView();
		},

		displayConcert: function (id){
				$('.form1').hide();
				$('.form2').hide();
				$('.concert_form').hide();
				new IndividualConcertView({ concertid: id, collection: all_concerts});
		},

		addConcert: function(){
				// new AddConcertView();
				// $('.form1').hide();
				// $('.fomr2').hide();
				// $('.concert_form').hide();
				// $('.concert_content').show();
		}

});

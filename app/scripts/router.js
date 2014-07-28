var Router = Backbone.Router.extend ({
		routes: {
			'' : 'signUp',
			'login' : 'login',
			'admin/:id' : 'admin',
			'concert/:id': 'displayConcert',
			'concerts/new' : 'addConcert',
			'concerts/my_concerts': 'myConcerts'
		},

		signUp: function () {
						$('.form1').show();
						$('.form2').hide();
						$('.main_nav').hide();
						$('.concert_form').hide();
						$('.concert_content').hide();
						$('.user_concert_content').hide();
				new SignupView();
		},

		displayConcert: function (id){
				$('.form1').hide();
				$('.form2').hide();
				$('.concert_form').hide();
				new IndividualConcertView({ concertid: id, collection: all_concerts});
		},

		addConcert: function(){
				$('.form1').hide();
				$('.form2').hide();
				$('.main_nav').show();
				$('.concert_form').show();
				$('.concert_content').hide();
				$('.user_concert_content').hide();
				new AddConcertView();
		},

		myConcerts: function(){
			  var userConcertView = null;
					if (userConcertView==null)
					    userConcertView = new UserConcertListView({ collection: user_concerts});
					else
					    userConcertView.render();
		}



});

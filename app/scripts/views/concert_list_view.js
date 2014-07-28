var ConcertListView = Backbone.View.extend ({

	el: '.concert_content',

	events: {
			'click .submit-button' : 'display',
			'click .card-header' : 'oneConcert',
			'click img.going': 'addGoingToConcert',
			'click img.maybe': 'addMaybeToConcert',
			'click img.not_going': 'addNotGoingToConcert'
	},

	initialize: function (){
			this.collection.on ('change', this.render, this);
			this.render();
	},

	render:function (){
			$('.form2').hide();
			$('.concert_form').hide();
			var template = Handlebars.templates.concert;
			var rendered = template({data:this.collection.toJSON()});
		  this.$el.html(rendered);
	},

	display : function() {
			window.Router.navigate('', { trigger: true });
	},

	oneConcert: function (event) {
	     event.preventDefault();
	     var concert_id = $(event.target).attr('id');
	     window.router.navigate('concert/'+ concert_id, {trigger: true});
   },

	addGoingToConcert: function(e){
			var concert = this.getClickedConcert(e);
			concert.set('attend','going');
			user_concerts.add(concert);
	},

	addMaybeToConcert: function(e){
			var concert = this.getClickedConcert(e);
			concert.set('attend','maybe');
			user_concerts.add(concert);
	},

	addNotGoingToConcert: function(e){
			var concert = this.getClickedConcert(e);
			concert.set('attend','notgoing');
			user_concerts.add(concert);
	},

	getClickedConcert: function(e){
			var user = Parse.User.current();
			var card_id = $(e.target).data('id');
			var clicked_concert_card = all_concerts.get(card_id);
			var newconcert = new Concert({
					title: 				clicked_concert_card.get('title'),
					date: 				clicked_concert_card.get('date'),
					attend:      	'',
					city: 				clicked_concert_card.get('city'),
					address: 			clicked_concert_card.get('address'),
					time: 				clicked_concert_card.get('time'),
					description: 	clicked_concert_card.get('description'),
					image_url: 		clicked_concert_card.get('image_url')
			});
			newconcert.set("user", user);
			return newconcert;
	}

});

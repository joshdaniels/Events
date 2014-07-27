var IndividualConcertView = Backbone.View.extend({

	el: '.concert_content', //'.hero-unit',

	events: {
		// "click .fa-trash-o" : "deletePost"
	    // "click #post_feed_container ul": "fullPost",
	},

	initialize: function(a){
			new MainNavView();
			$('.concert_content').show();
	    this.options = a;
	    this.render();
	},

	render: function(){
		var lone = this.collection.get(this.options.concertid); 
	    var rendered = Handlebars.templates.single(lone.toJSON());
	    this.$el.html(rendered);
	},

});

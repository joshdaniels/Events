var ConcertView = Backbone.View.extend ({

	el: '.concert_content',

	events: {
		'click .submit-button' : 'display'
	},

	initialize: function (){
		this.collection.on ('change', this.render, this);
		this.render ();
	},
		
		

	render:function (){
		var list = this.collection;
		var template = Handlebars.templates.eventlist;
		var rendered = template({data:this.collection.toJSON()});
	    this.$el.html(rendered); 
	},
	
  			
	display : function() {
		window.Router.navigate('', { trigger: true });
	}
});
		


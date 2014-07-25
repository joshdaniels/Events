var BandView = Backbone.View.extend ({

	el: '.band_content',

	events: {
		'click .band_submit_button' : 'display'
	},

	initialize: function (){
		this.collection.on ('change', this.render, this);
		this.render ();
	},
		
	render:function (){
		var list = this.collection;
		var template = Handlebars.templates.band;
		var rendered = template({data:this.collection.toJSON()});
	    this.$el.html(rendered); 
	},
		
	display : function() {
		window.Router.navigate('', { trigger: true });
	}
});
// var ConcertView = Backbone.View.extend ({

// 	el: '.event_content',

// 	events: {
// 	//	'click .event' : 'display'
// 	},

// 	initialize: function (a){
		
// 		// this.collection.on ('change', this.render, this);
// 		// this.options = a; 
// 		// console.log(this.options);
// 		// console.log(this.collection);
// 		this.render ();
// 	},

// 	render:function (){
// 		var eventVariable = this.collection.get(this.attrs.concertid); 
// 		console.log(this.attrs.concertid);
// 	    var rendered = Handlebars.templates.concert(eventVariable.toJSON());
// 	    this.$el.html(rendered); 
// 	},

// 	display : function() {
// 		//Navigate back home after form is complete.
// 		window.Router.navigate('concert'+id, { trigger: true });
// 	}

// });

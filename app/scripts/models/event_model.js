var Event = Parse.Object.extend({
	classname: "event",
	idAttribute: 'objectId',

	defaults: {
		title: '',
		description: '',
		date: '',
		city: '',
		address: '',
		time: ''

	},

	initialize:function(){
		console.log("created new event");
	}

});

var EventCollection = Parse.Collection.extend({
  model: Event
});
 
var all_events = new EventCollection();
 
// // Construct a query to get the current user's todo items
// var query = new Parse.Query(ParseTodo);
// query.equalTo("user", Parse.User.current());
// todos.query = query;
// todos.fetch();
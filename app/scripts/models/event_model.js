var Concert = Parse.Object.extend({
	className: "Concert",
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

var ConcertCollection = Parse.Collection.extend({
  model: Concert
});
 

 
// // Construct a query to get the current user's todo items
// var query = new Parse.Query(ParseTodo);
// query.equalTo("user", Parse.User.current());
// todos.query = query;
// todos.fetch();
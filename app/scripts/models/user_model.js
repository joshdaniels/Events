var User = Parse.Object.extend({
	idAttribute: 'objectId',
	classname: "user",
	defaults: {
		username: '',
		password: '',
		band: '',
		city: '',
		address: ''

	},

	initialize:function(){
		console.log("created new user");
		var user = new Parse.User();
		user.set("username", "my name");
		user.set("password", "my pass");
		user.set("email", "email@example.com");
 
		// other fields can be set just like with Parse.Object
		user.set("phone", "415-392-0202");
 
		user.signUp(null, {
		  	success: function(user) {
		    	// Hooray! Let them use the app now.
		  	},
		  	error: function(user, error) {
		    	// Show the error message somewhere and let the user try again.
		    	alert("Error: " + error.code + " " + error.message);
			}
		});
	}
});

var UserCollection = Parse.Collection.extend({
  model: User
});
 
var all_users = new UserCollection();
 
// // Construct a query to get the current user's todo items
// var query = new Parse.Query(ParseTodo);
// query.equalTo("user", Parse.User.current());
// todos.query = query;
// todos.fetch();
console.log('The Iron Yard Rocks');
Parse.initialize("LvC2cOqbHzDCJGiYD9GhAXHB43cy5TATLshc4joD", "0KrwMzacFoFLgwW9x2HAdhaZLeQTKszLgr0epJoI");


var all_concerts = new ConcertCollection();
var all_bands = new BandCollection();

/* SIGN UP A PARTICULAR USER (NEW) */
$('.form1').on('submit', function  (event) {
		event.preventDefault();
		var user = new Parse.User();
		user.set("username", $("#name").val());
		user.set("password", $("#password").val());
		user.set("email", $("#email").val());
		user.signUp(null, {
				success: function(user) {
					// Hooray! Let them use the app now.
					$('.form1').hide();
					$('.concert_content').show();
					new MainNavView();
				},
				error: function(user, error) {
					// Show the error message somewhere and let the user try again.
					alert("Error: " + error.code + " " + error.message);
				}
		});
		$(this).trigger('reset');
});


/* CREATE A NEW CONCERT OBJECT AND SAVE IT */
$('.submit_button').on('click', function(event) {
		event.preventDefault();
		var newconcert = new Concert({
				title: $('.title_field').val(),
				date: $('.date_field').val(),
				city: $('.city_field').val(),
				address: $('.address_field').val(),
				time: $('.time_field').val(),
				description: $('.description_field').val(),
				image_url: $('.image_field').val(),
		});
		all_concerts.add(newconcert);

		newconcert.save(null, {
				success: function (newconcert) {
						// Working!
						window.router.navigate('#concert/'+newconcert, {trigger: true});
				},
				error: function(error) {

				}
		});
		window.router.navigate('', { trigger: true });
		$(this).trigger('reset');
});


/* GET ALL THE CONCERT DATA */
all_concerts.fetch().done(function (){
			window.router = new Router();
			Backbone.history.start();
});


/*

var query = new Parse.Query(Concert);
query.get( id , {
success: function(concert1) {
	// The object was retrieved successfully.
},
error: function(object, error) {
	// The object was not retrieved successfully.
	// error is a Parse.Error with an error code and description.
}
});

var date = concert1.get("date");
var address = concert1.get("address");
var description = concert1.get("description");


// ## The three special values are provided as properties:
// var objectId = gameScore.id;
// var updatedAt = gameScore.updatedAt;
// var createdAt = gameScore.createdAt;
// ## If you need to refresh an object you already have with the latest data that is in the Parse Cloud, you can call the fetch method like so:
// myObject.fetch({
//   success: function(myObject) {
//     // The object was refreshed successfully.
//   },
//   error: function(myObject, error) {
//     // The object was not refreshed successfully.
//     // error is a Parse.Error with an error code and description.
//   }
// });

*/

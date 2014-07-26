console.log('The Iron Yard Rocks');
Parse.initialize("LvC2cOqbHzDCJGiYD9GhAXHB43cy5TATLshc4joD", "0KrwMzacFoFLgwW9x2HAdhaZLeQTKszLgr0epJoI");

var all_concerts = new ConcertCollection();
var all_bands = new BandCollection();


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
	newconcert.save(null, {success: function (newconcert) {

	}});

	window.router.navigate('', { trigger: true });

	$(this).trigger('reset');
});

all_concerts.fetch().done(function (){
			window.router = new Router();
	 		Backbone.history.start();
});

/*SIGN UP A PARTICULAR USER (NEW) */
$('.form1').on('submit', function  (event) {

			event.preventDefault();
			var user = new Parse.User();
			user.set("username", $("#name").val());
			user.set("password", $("#password").val());
			user.set("email", $("#email").val());

			user.signUp(null, {
			  success: function(user) {
			    // Hooray! Let them use the app now.

			  },

			  error: function(user, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + " " + error.message);
			  }
			});

			$(this).trigger('reset');
	});

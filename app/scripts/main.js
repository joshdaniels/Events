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

$('.band_submit_button').on('click', function(event) {
	event.preventDefault();
	var newband = new Band({
		name: $('.band_name_field').val(),
		genre: $('.genre_field').val(),
		city: $('.band_city_field').val(),
		description: $('.band_description_field').val()
	});
	
	all_bands.add(newband);
	newband.save(null, {success: function (newband) {

	}});
	
	window.router.navigate('', { trigger: true });

	$(this).trigger('reset');
});

	all_bands.fetch().done(function (){
});

	  
	





	



	






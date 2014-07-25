console.log('The Iron Yard Rocks');
Parse.initialize("LvC2cOqbHzDCJGiYD9GhAXHB43cy5TATLshc4joD", "0KrwMzacFoFLgwW9x2HAdhaZLeQTKszLgr0epJoI");




// var AppView = function (){

//   this.showView = function(view) {
//     if (this.currentView){
//       //this.currentView.remove();
//     }

//     this.currentView = view;
//     this.currentView.render();

//     $(".dan").html(this.currentView.el);
//   }

// }

var all_concerts = new ConcertCollection();



all_concerts.fetch();

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

	//Navigate back home after form is complete.
	// window.router.navigate('', { trigger: true });

	$(this).trigger('reset');

});






// var testconcert = new Concert();
// console.log("new event");


//  var all_concerts = new ConcertCollection();

//  console.log("new collection");

 
//  all_concerts.add(testconcert);
//  console.log("added event to collection");
//  testconcert.save();

// all_concerts.fetch().done(function (){

// 	 window.router = new Router();
//   Backbone.history.start();
  
// });
console.log('The Iron Yard Rocks');
Parse.initialize("LvC2cOqbHzDCJGiYD9GhAXHB43cy5TATLshc4joD", "0KrwMzacFoFLgwW9x2HAdhaZLeQTKszLgr0epJoI");


var all_concerts = new ConcertCollection();
var all_bands = new BandCollection();



/* GET ALL THE CONCERT DATA */
all_concerts.fetch().done(function (){
			window.router = new Router();
			Backbone.history.start();
});

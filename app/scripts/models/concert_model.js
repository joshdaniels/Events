var Concert = Parse.Object.extend({
	className: "Concert",
	idAttribute: 'objectId',
	defaults: {
		title: '',
		description: '',
		date: '',
		city: '',
		address: '',
		time: '',
		image_url: ''
	}
});

var ConcertCollection = Parse.Collection.extend({
  model: Concert
});

var all_concerts = new ConcertCollection();
var user_concerts = new ConcertCollection();

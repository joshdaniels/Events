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
	}
});

var ConcertCollection = Parse.Collection.extend({
  model: Concert
		
});	

		




 

 
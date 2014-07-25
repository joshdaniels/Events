var Band = Parse.Object.extend({
	className: "Band",
	idAttribute: 'objectId',
	defaults: {
		name: '',
		genre: '',
		city: '',
		description: ''
	}
});

var BandCollection = Parse.Collection.extend({
  model: Band
		
});	
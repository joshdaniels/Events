var User = Parse.Object.extend({

className: "user",

  defaults:{
 username: '',
 password: ''

},
  idAttribute: "objectId" ,

  initialize: function (){
    console.log("a new post has been created.");
  }
});

var Users = Parse.Collection.extend({

    model: User,

});

var all_users = new Users();

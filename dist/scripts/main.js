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
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['admin'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['band'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class='bandFullSize'>\n	<span>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.genre) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.genre); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['bandlist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['concert'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"card\">\n<div class=\"ribbon-wrapper\" data-attend=\"";
  if (helper = helpers.attend) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.attend); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n		<div class=\"ribbon going\">Going</div>\n		<div class=\"ribbon maybe\">Maybe</div>\n		<div class=\"ribbon notgoing\">Not Going</div>\n</div>\n<div class=\"card-image\">\n<img src=\"";
  if (helper = helpers.image_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"\">\n</div>\n<div class=\"card-header\" id=\"";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"card-copy\">\n<p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n<div class=\"card-stats\">\n<ul>\n	<li>Date<span>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n	<li>Time<span>";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n	<li>City<span>";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n	<li>Address<span>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n	<li>id<span>";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n	<img class=\"going\" src=\"../images/going_icon.png\" data-id=\"";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<img class=\"maybe\" src=\"../images/maybe_icon.png\" data-id=\"";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<img class=\"not_going\" src=\"../images/not_going_icon.png\" data-id=\"";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"/>\n</ul>\n</div>\n</div>\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['createband'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['createevent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['eventlist'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class='eventFullSize'>\n	<span>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> \n	<span>";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n	<span>";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['single'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"card\">\n<div class=\"card-image\">\n<img src=\"";
  if (helper = helpers.image_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.image_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" alt=\"\">\n</div>\n<div class=\"card-header\" id=\"";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</div>\n<div class=\"card-copy\">\n<p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n<div class=\"card-stats\">\n<ul>\n  <li>Date<span>";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n  <li>Time<span>";
  if (helper = helpers.time) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.time); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n  <li>City<span>";
  if (helper = helpers.city) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.city); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n  <li>Address<span>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n  <li>id<span>";
  if (helper = helpers.objectId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.objectId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></li>\n  <img class=\"going\" src=\"../images/going_icon.png\"/>\n  <img class=\"maybe\" src=\"../images/maybe_icon.png\"/>\n  <img class=\"not_going\" src=\"../images/not_going_icon.png\"/>\n</ul>\n</div>\n</div>\n</div>\n";
  return buffer;
  });
})();
var ConcertListView = Backbone.View.extend ({

	el: '.concert_content',

	events: {
			'click .submit-button' : 'display',
			'click .card-header' : 'oneConcert',
			'click img.going': 'addGoingToConcert',
			'click img.maybe': 'addMaybeToConcert',
			'click img.not_going': 'addNotGoingToConcert'
	},

	initialize: function (){
			this.collection.on ('change', this.render, this);
			this.render();
	},

	render:function (){
			$('.form2').hide();
			$('.concert_form').hide();
			var template = Handlebars.templates.concert;
			var rendered = template({data:this.collection.toJSON()});
		  this.$el.html(rendered);
	},

	display : function() {
			window.Router.navigate('', { trigger: true });
	},

	oneConcert: function (event) {
	     event.preventDefault();
	     var concert_id = $(event.target).attr('id');
	     window.router.navigate('concert/'+ concert_id, {trigger: true});
   },

	addGoingToConcert: function(e){
			var concert = this.getClickedConcert(e);
			concert.set('attend','going');
			user_concerts.add(concert);
	},

	addMaybeToConcert: function(e){
			var concert = this.getClickedConcert(e);
			concert.set('attend','maybe');
			user_concerts.add(concert);
	},

	addNotGoingToConcert: function(e){
			var concert = this.getClickedConcert(e);
			concert.set('attend','notgoing');
			user_concerts.add(concert);
	},

	getClickedConcert: function(e){
			var user = Parse.User.current();
			var card_id = $(e.target).data('id');
			var clicked_concert_card = all_concerts.get(card_id);
			var newconcert = new Concert({
					title: 				clicked_concert_card.get('title'),
					date: 				clicked_concert_card.get('date'),
					attend:      	'',
					city: 				clicked_concert_card.get('city'),
					address: 			clicked_concert_card.get('address'),
					time: 				clicked_concert_card.get('time'),
					description: 	clicked_concert_card.get('description'),
					image_url: 		clicked_concert_card.get('image_url')
			});
			newconcert.set("user", user);
			return newconcert;
	}

});

var IndividualConcertView = Backbone.View.extend({

	el: '.concert_content', //'.hero-unit',

	events: {
		// "click .fa-trash-o" : "deletePost"
	    // "click #post_feed_container ul": "fullPost",
	},

	initialize: function(a){
			new MainNavView();
			$('.concert_content').show();
	    this.options = a;
	    this.render();
	},

	render: function(){
		var lone = this.collection.get(this.options.concertid); 
	    var rendered = Handlebars.templates.single(lone.toJSON());
	    this.$el.html(rendered);
	},

});


var userConcertList = null;
var MainNavView = Backbone.View.extend ({

  el: '.main_nav',

  events: {
      'click .sign_up ': 'userSignUp',
      'click .add_event ': 'showAddEventForm',
      'click .my_events ': 'myevents'
  },

  initialize: function (){
      $('.main_nav').show();
  },

  render:function (){
    var list = this.collection;
    var template = Handlebars.templates.concert;
    var rendered = template({data:this.collection.toJSON()});
    this.$el.html(rendered);
  },

  userSignUp: function(){
    window.router.navigate( '', {trigger: true} );
  //  window.router.navigate('concert/'+ concert_id, {trigger: true});
  },

  showAddEventForm: function(){
    window.router.navigate( 'concerts/new', {trigger: true} );
  },


  myevents: function (){
    window.router.navigate( 'concerts/my_concerts', {trigger: true} );
  }

});

var AddConcertView = Backbone.View.extend ({

  el: '.concert_form',

  events: {
      'click .addConcert ': 'saveConcert'
  },

  initialize: function (){
      // $('.form1').hide();
      // $('.fomr2').hide();
      // $('.concert_form').hide();
      // $('.concert_content').show();

  },

  render:function (){

  },

  saveConcert: function(event){
      event.preventDefault();
      var newconcert = new Concert({
          title: $('.title_field').val(),
          date: $('.date_field').val(),
          city: $('.city_field').val(),
          address: $('.address_field').val(),
          time: $('.time_field').val(),
          description: $('.description_field').val(),
          image_url: $('.image_field').val()
      });

      all_concerts.add(newconcert);     //add concert to the collection
      var user = Parse.User.current();  //grab the current user
      newconcert.set('user', user);     // Associate the concert instance with the user

      newconcert.save(null, {
          success: function (newconcert) {
              /* Working!*/
          },
          error: function(error) { }
      });
      window.router.navigate('', { trigger: true });
      $(this).trigger('reset');

      // SHOW THE MAIN CONTENT AGAIN
      $('.form1').hide();
      $('.fomr2').hide();
      $('.concert_form').hide();
      $('.concert_content').show();

      //window.router.navigate( 'concert/', {trigger, true} );
  },

  myevents: function (){
      $('.test').text('We CHANGED THIS LINK!! HAHA!');
  }

});

var UserConcertListView = Backbone.View.extend ({

    el: '.user_concert_content',

    events: {
        'click .submit-button' : 'display',
        'click .card-header' : 'oneConcert'
    },

    initialize: function (){
        $('.concert_content').hide();
        var user = Parse.User.current();
        var query = new Parse.Query(Concert);
        query.equalTo("user", user);
        var concerts = [ ];
        query.find({
            success: function(result) {
                for (var i in result) {
                    var c = new Concert({
                        title:      result[i].get('title'),
                        date:       result[i].get('date'),
                        attend:     result[i].get('attend'),
                        city:       result[i].get('city'),
                        address:    result[i].get('address'),
                        time:       result[i].get('time'),
                        description: result[i].get('description'),
                        image_url:  result[i].get('image_url')
                    });
                    user_concerts.add(c); // add concert to user_collection
                }
            }
        });
        user_concerts.each(function(c) {
          //  console.log('c.get(attend) of '+c.cid+':'+c.get('attend') );

        //    console.log(c);
        });

        this.collection.on ('change', this.render, this);
        this.render();
        return this;
    },

    render:function (){
        $('.form2').hide();
        $('.concert_form').hide();
        $('.user_concert_content').show();
        var template = Handlebars.templates.concert;
        var rendered = template({data:this.collection.toJSON()});
        this.$el.html(rendered);
        $(document).ready(function () {
            $(".card").each(function () {
                    var attend = $(this).find('.ribbon-wrapper');
                    if (attend.data('attend') =='going') attend.find('.going').show();
                    if (attend.data('attend') =='maybe') attend.find('.maybe').show();
                    if (attend.data('attend') =='notgoing') attend.find('.notgoing').show();
            });
        });
    },

    display : function() {
        window.Router.navigate('', { trigger: true });
    },

    oneConcert: function (event) {
       event.preventDefault();
       var concert_id = $(event.target).attr('id');
       window.router.navigate('concert/'+ concert_id, {trigger: true});
     }

});

var SignupView = Backbone.View.extend ({

    el: '.mainContainer',

    events: {
        'click .signUpUser ': 'CreateUser',
        'click .LogInUser': 'LogIn',
        'click .login_link': 'ShowLogInForm',
        'click .sign_up_link': 'ShowSignupForm'
    },

    initialize: function (){
        $('.form1').show();
    },

    render:function (){
    },

    CreateUser: function(event){

        event.preventDefault();
        var user = new Parse.User();
        user.set("username", $("#signUpName").val());
        user.set("password", $("#signUpPassword").val());
        user.set("email", $("#signUpEmail").val());
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
    },

    ShowLogInForm: function (){
        $('.form1').hide();
        $('.log_in_form').show();
    },

    ShowSignupForm: function (){
        $('.log_in_form').hide();
        $('.form1').show();
    },

    LogIn: function (event){
        $('.form1').hide();
        $('.log_in_form').hide();

        event.preventDefault();
        var username = $("#loginName").val();
        var password = $("#loginPassword").val();

        Parse.User.logIn( username, password, {
            success: function(user) {
              $('.concert_content').show();
              new ConcertListView({ collection: all_concerts});
              new MainNavView();
              // Do stuff after successful login.
            },
            error: function(user, error) {
              // The login failed. Check error to see why.
            }
        });
    }
});

var Router = Backbone.Router.extend ({
		routes: {
			'' : 'signUp',
			'login' : 'login',
			'admin/:id' : 'admin',
			'concert/:id': 'displayConcert',
			'concerts/new' : 'addConcert',
			'concerts/my_concerts': 'myConcerts'
		},

		signUp: function () {
						$('.form1').show();
						$('.form2').hide();
						$('.main_nav').hide();
						$('.concert_form').hide	();
						$('.concert_content').hide();
						$('.user_concert_content').hide();
				new SignupView();
		},

		displayConcert: function (id){
				$('.form1').hide();
				$('.form2').hide();
				$('.concert_form').hide();
				new IndividualConcertView({ concertid: id, collection: all_concerts});
		},

		addConcert: function(){
				$('.form1').hide();
				$('.form2').hide();
				$('.main_nav').show();
				$('.concert_form').show();
				$('.concert_content').hide();
				$('.user_concert_content').hide();
				new AddConcertView();
		},

		myConcerts: function(){
			  var userConcertView = null;
					if (userConcertView==null)
					    userConcertView = new UserConcertListView({ collection: user_concerts});
					else
					    userConcertView.render();
		}



});

console.log('The Iron Yard Rocks');
Parse.initialize("LvC2cOqbHzDCJGiYD9GhAXHB43cy5TATLshc4joD", "0KrwMzacFoFLgwW9x2HAdhaZLeQTKszLgr0epJoI");


var all_bands = new BandCollection();



/* SIGN UP A PARTICULAR USER (NEW) */
// $('.form1').on('submit', function  (event) {
// 		event.preventDefault();
// 		var user = new Parse.User();
// 		user.set("username", $("#name").val());
// 		user.set("password", $("#password").val());
// 		user.set("email", $("#email").val());
// 		user.signUp(null, {
// 				success: function(user) {
// 					// Hooray! Let them use the app now.
// 					$('.form1').hide();
// 					$('.concert_content').show();
// 					$('.main_nav').show();
// 					new MainNavVi
// 				},
// 				error: function(user, error) {
// 					// Show the error message somewhere and let the user try again.
// 					alert("Error: " + error.code + " " + error.message);
// 				}
// 		});
// 		$(this).trigger('reset');
// });


/* CREATE A NEW CONCERT OBJECT AND SAVE IT */
// $('.submit_button').on('click', function(event) {
// 		event.preventDefault();
// 		var newconcert = new Concert({
// 				title: $('.title_field').val(),
// 				date: $('.date_field').val(),
// 				city: $('.city_field').val(),
// 				address: $('.address_field').val(),
// 				time: $('.time_field').val(),
// 				description: $('.description_field').val(),
// 				image_url: $('.image_field').val(),
// 		});
// 		all_concerts.add(newconcert);
//
// 		newconcert.save(null, {
// 				success: function (newconcert) {
// 						// Working!
// 						window.router.navigate('#concert/'+newconcert, {trigger: true});
// 				},
// 				error: function(error) {
//
// 				}
// 		});
// 		window.router.navigate('', { trigger: true });
// 		$(this).trigger('reset');
// });


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

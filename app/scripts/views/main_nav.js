
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

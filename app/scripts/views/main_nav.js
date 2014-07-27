var MainNavView = Backbone.View.extend ({

  el: '.main_nav',

  events: {
      'click .reload ': 'reload_app',
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

  reload_app: function(){
    window.router.navigate( '', {trigger: true} );
  //  window.router.navigate('concert/'+ concert_id, {trigger: true});
  },

  showAddEventForm: function(){
    // We only want to see the ADD Concert FORM
    $('.form1').hide();
    $('.form2').hide();
    $('.concert_form').show();
    $('.concert_content').hide();
    new AddConcertView();
  },

  myevents: function (){
      new UserConcertListView({ collection: user_concerts});
      $('.test').text('We CHANGED THIS LINK!! HAHA!');
  }

});

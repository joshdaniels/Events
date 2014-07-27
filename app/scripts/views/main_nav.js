var MainNavView = Backbone.View.extend ({

  el: '.main_nav',

  events: {
      'click .add_event ': 'addConcert',
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

  addConcert: function(){
    // We only want to see the ADD Concert FORM
    $('.form1').hide();
    $('.form2').hide();
    $('.concert_form').show();
    $('.concert_content').hide();
  },

  myevents: function (){
      $('.test').text('We CHANGED THIS LINK!! HAHA!');
  }

});

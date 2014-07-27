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
          image_url: $('.image_field').val(),
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

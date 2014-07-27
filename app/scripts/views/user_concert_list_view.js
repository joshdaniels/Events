var UserConcertListView = Backbone.View.extend ({

    el: '.user_concert_content',

    events: {
        'click .submit-button' : 'display',
        'click .card-header' : 'oneConcert'
    },

    initialize: function (){
        $('.main_nav').hide();
        var user = Parse.User.current();
        var query = new Parse.Query(Concert);
        query.equalTo("user", user);
        query.find({
            success: function(userConcerts) {

                for (var concrt in userConcerts) { 
                    //statement
                }
                // userConcerts contains all of the concerts by the current user.
                alert('I Got My Unique Concerts!');
            }
        });

        $('.user_concert_content').show();
        foreach()
        this.collection.on ('change', this.render, this);
        this.render();
    },

    render:function (){
        $('.form2').hide();
        $('.concert_form').hide();
        $('.concert_content').hide();

        var list = this.collection;
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
       console.log(event);
       console.log(concert_id);
       window.router.navigate('concert/'+ concert_id, {trigger: true});
     }

});

var UserConcertListView = Backbone.View.extend ({

    el: '.user_concert_content',

    events: {
        'click .submit-button' : 'display',
        'click .card-header' : 'oneConcert'
    },

    initialize: function (){
        $('.concert_content').hide();
        // $('.main_nav').hide();
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
                        city:       result[i].get('city'),
                        address:    result[i].get('address'),
                        time:       result[i].get('time'),
                        description: result[i].get('description'),
                        image_url:  result[i].get('image_url')
                    });
                    console.log(
                      result[i].get('title')+ result[i].get('date')+ result[i].get('city')+ result[i].get('address')+
                      result[i].get('time')+ result[i].get('description')+ result[i].get('image_url')
                    );
                    user_concerts.add(c); // add concert to user_collection
                }
            }
        });
        console.log('User_Concert_Collections:'+user_concerts);
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

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

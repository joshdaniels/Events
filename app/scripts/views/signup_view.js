var Signup = Backbone.View.extend ({

    el: '.form1',

    events: {
        'click .signUpUser ': 'CreateUser'
    },

    initialize: function (){
        // $('.form1').hide();
        // $('.fomr2').hide();
        // $('.concert_form').hide();
        // $('.concert_content').show();
    },

    render:function (){

    },

    CreateUser: function(event){

        event.preventDefault();
        var user = new Parse.User();
        user.set("username", $("#name").val());
        user.set("password", $("#password").val());
        user.set("email", $("#email").val());
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
    }

});

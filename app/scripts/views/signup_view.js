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
              alert('User is logged IN');
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

/*
// =======  TEST User Signup  ==========
Parse.User.signUp('justin', 'password', { ACL: new Parse.ACL() }, {
  success: function(user) {
    console.log('success: ',user);
  },
  error: function(user, error) {
    console.log('error: ',user, error);
  }
});
*/

/*
// =======  TEST User Login  ==========
var username = 'justin';
var password = 'password';

Parse.User.logIn(username, password, {
  success: function(user) {
    console.log('success: ',user);
  },
  error: function(user, error) {
    console.log('error: ',user, error);
  }
});
*/
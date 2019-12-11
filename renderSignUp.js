

$(function() {
  const $form = $('#signup-form');
  const $message = $('#message');

  $form.submit(function(event) {
    event.preventDefault();

    $message.html('');

    const data2 = $form.serialize();
    console.log(data2);
    
    $.ajax({
      url: 'http://localhost:3000/account/create',
      type: 'POST',
      data: data2,
      withCredentials: true,

      
    }).then(() => {
      $message.html('<span class="has-text-success">Success! You are now signed up in.</span>');
      location.href=("Login.html")
    }).catch(() => {
      $message.html('<span class="has-text-danger">Something went wrong and you were not signed up in. Check your email and password and your internet connection.</span>');
    });
  });
});


  

function onSignUp(googleUser) 
{
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  //document.getElementById("demo").innerHTML ='Full Name: ' + profile.getName();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
$.ajax({
url: 'http://localhost:3000/account/create',
type: 'POST',
data:
{
  "name":profile.getName(),
  "pass":"1234"
} ,
withCredentials: true,
});
  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://http://localhost:3000/account/create');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
console.log('Signed up as: ' + xhr.responseText);
};
// xhr.send('idtoken=' + id_token);
}

function signOut() 
{
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
  console.log('User signed out.');
});
}

  

  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{469493847084419}',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : '{v5.0}'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };

  
  (function(d, s, id) {                      // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
        location.href=("Login.html")
    });
  }

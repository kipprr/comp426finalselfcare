
  $(function() {
    const $form = $('#signin-form');
    const $message = $('#message1');
  
    $form.submit(function(event) {
      event.preventDefault();
  
      $message.html('');
  
      const data2 = $form.serialize();
      console.log(data2);
      let res = {};
      $.ajax({
        url: 'http://localhost:3000/account/login',
        type: 'POST',
        data: data2,
        withCredentials: true,
        success: function(data){
            res=data;
        }

        
      }).then(() => {
        $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
        sessionStorage.setItem('user', res.name);
        sessionStorage.setItem('jwt',  res.jwt);
        location.href=("homepage.html");
      }).catch(() => {
        $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
      });
    });
  });
  
  
  
  function onSignIn(googleUser) 
  {
    
    // Useful data for your client-side scripts:
    var profile1 = googleUser.getBasicProfile();
    //document.getElementById("demo").innerHTML ='Full Name: ' + profile.getName();
    console.log("ID: " + profile1.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile1.getName());
    console.log('Given Name: ' + profile1.getGivenName());
    console.log('Family Name: ' + profile1.getFamilyName());
    console.log("Image URL: " + profile1.getImageUrl());
    console.log("Email: " + profile1.getEmail());
$.ajax({
  url: 'http://localhost:3000/account/login',
  type: 'POST',
  data:
  {
    "name":profile1.getName(),
    "pass":"1234"
  } ,
  withCredentials: true,
  success: function(data){
    res=data;
  }
}).then(() => {
  
 
});
    // The ID token you need to pass to your backend:
    var id_token1 = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token1);
    var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://http://localhost:3000/account/login');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
console.log('Signed in as: ' + xhr.responseText);
//location.href=("homepage.html");
};
//location.href=("homepage.html");
alert(`Welcome, ${profile1.getName()}`);
location.href=("homepage.html");
sessionStorage.setItem('user', `${profile1.getName()}`);
};


// xhr.send('idtoken=' + id_token);


function signOut() 
{
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    
    console.log('User signed out.');
  });
  location.href=("Login.html");
  
}

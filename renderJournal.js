
$(function() 
{
  const $form = $('#accountinfo-form');
  const $message = $('#message3');
  //event.preventDefault();

  $message.html('');

  
  //console.log(data2);
  
  let token = sessionStorage.getItem('user');
  
    $message.html(`<h1 class = "title is-4"> Welcome to Your Journal ${token}! </h1>`);
 
  
});
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
location.href=("journal.html");
sessionStorage.setItem('user', `${profile1.getName()}`);
function signOut() 
{
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    
    console.log('User signed out.');
  });
  location.href=("Login.html");
  
}



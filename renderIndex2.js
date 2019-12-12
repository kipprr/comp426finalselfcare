var i = 0;
var txt = 'Send Love Over The Holiday'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */


$(function() 
{

  typewriter
  .pauseFor(2500)
  .typeString("🌷A simple yet powerful native javascript")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .typeString(
    '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
  )
  .pauseFor(1000)
  .start();

  typeWriter();
  const $form = $('#accountinfo-form');
  const $message = $('#message3');
  //event.preventDefault();

  $message.html('');

  
  //console.log(data2);
  
  let token = sessionStorage.getItem('user');
  
    $message.html(`<h1 class = "title is-4"> Thank you for visting our APP </h1>`);
 
  
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

const typewriter = new Typewriter($('#demo'), {
  loop: true,
  delay: 75,
});





function typeWriter() {
  if (i < txt.length) {
    $('#demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



$(function() 
{

  // new Typewriter(document.getElementById("app"), {
  //   strings: ['Send Love Over The Holiday', '<strong>SLOTH</strong>'],
  //   autoStart: true,
  //   loop: true
  // });




$(document).on('click','#continue', handleContinue);

 
  // const $form = $('#accountinfo-form');
  // const $message = $('#message3');
  // //event.preventDefault();

  // $message.html('');

  
  // //console.log(data2);
  
  // let token = sessionStorage.getItem('user');
  
  //   $message.html(`<h1 class = "title is-4"> Thank you for visting our APP </h1>`);
 
  
});


const handleContinue = function() {

  //$(document).scrollTo(document.getElementById('app'));
  document.getElementById('scroll').scrollIntoView();
  new Typewriter(document.getElementById("app"), {
    loop: true,
    delay: 75,
  })
    .pauseFor(2500)
    .typeString("So what <italics>is</italics> SLOTH?")
    .pauseFor(1000)
    .deleteChars(17)
    .typeString("We're glad you asked.")
    .pauseFor(1000)
    .deleteChars(21)
    .typeString('SLOTH is the perfect way to <span style="color: red">s</span>end <span style="color: red">l</span>ove <span style="color: red">o</span>ver <span style="color: red">t</span>he <span style="color: red">h</span>oliday.')
    .pauseFor(1000)
    .typeString(
      '\n Make your own cheesy Christmas romance movie'
    )
    .pauseFor(1000)
    .typeString(
      ' or simply read the plots that have already been written by other users.'
    ).pauseFor(500)
    .typeString(
      '\n Sign up or just try our anonymous public movie plot feed below.'
    )
    .start();
};
// var id_token1 = googleUser.getAuthResponse().id_token;
//     console.log("ID Token: " + id_token1);
//     var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://http://localhost:3000/account/login');
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onload = function() {
// console.log('Signed in as: ' + xhr.responseText);
// //location.href=("homepage.html");
// };
// //location.href=("homepage.html");
// alert(`Welcome, ${profile1.getName()}`);
// location.href=("journal.html");
// sessionStorage.setItem('user', `${profile1.getName()}`);
// function signOut() 
// {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
    
//     console.log('User signed out.');
//   });
//   location.href=("Login.html");
  
// }





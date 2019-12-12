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


const handleContinue = async function() {

  //$(document).scrollTo(document.getElementById('app'));
  document.getElementById('everything').innerHTML = `<div class="container" style="padding-top: 10px; background-color: #fefcfe" >
  <div style="padding-bottom: 0px">
    <div id="app" style="color: black; line-height: 78px"></div>
</div>

</div>`;

  new Typewriter(document.getElementById("app"), {
    loop: true,
    delay: 75,
  })
    .pauseFor(2500)
    .typeString('<span style="font-size: 50pt">So what is SLOTH?</span>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('<span style="font-size: 50pt">Thanks for asking.</span>')
    .pauseFor(1000)
    .deleteChars(21)
    .typeString('<span style="font-size: 50pt">SLOTH is the perfect way to <span style="color: red; font-size: 50pt">s</span>end <span style="color: red; font-size: 50pt">l</span>ove <span style="color: red; font-size: 50pt">o</span>ver <span style="color: red; font-size: 50pt">t</span>he <span style="color: red; font-size: 50pt">h</span>oliday.</span>')
    .pauseFor(1000)
    .typeString(
      '<span style="font-size: 50pt"> Make your own cheesy Christmas romance movie</span>'
    )
    .pauseFor(1000)
    .typeString(
      '<span style="font-size: 50pt"> or simply read the plots that have already been written by other users.</span>'
    ).pauseFor(500)
    .typeString(
      '<span style="font-size: 50pt"> Sign up or just try our anonymous public movie plot feed below.</span>'
    )
    .start();
    setTimeout(function(){
      document.getElementById('publictwitterbutton').innerHTML = `<button class="button is-dark is-outlined" style="padding: 0px 20px" id="continue" onclick="window.location.href = 'publictwitter.html';">See Movie Post Feed</button>
      `;
      
    }, 33000);
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






$(function() 
{
  const $form = $('#accountinfo-form');
  const $message = $('#message3');
  //event.preventDefault();

  $message.html('');

  
  //console.log(data2);
  
  let token = sessionStorage.getItem('user');
  
    $message.html(`<h1 class = "title is-4"> Welcome to Your Journal ${token}! </h1>`);
 
  
})



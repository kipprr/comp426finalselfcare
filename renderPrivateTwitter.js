

var currentTweetForEdit = 0;

const getMovie = async function() {
    const result = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/movie',
        withCredentials: true,
    });
    return result;
};

const renderMovie = function(movie, i) {
    if(movie.data.result[i].user == sessionStorage.getItem('user')) {
      // edit and delete button
      return `<div class="container tweet" id="${movie.data.result[i].date}" style="padding-bottom: 20px">
    <div class="card">
            <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                <div class="media-content">
                  <p class="title is-4 tweetName" style="text-transform: capitalize">${movie.data.result[i].user}</p>
                </div>
            </div>
            <div class="container tweetText" id="${movie.data.result[i].date}body"style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
            ${movie.data.result[i].body}
            </div>
            <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <figure class="image is-24x24" >
                                    <img src="images/heart-empty-64.png"  alt="Not liked by you button" class="tweetLikeButton">
                            </figure>
                        </div>
                    </div>
                    <div class="level-right">
                    <div class="level-item">
                    <button class="button is-small is-light deleteButton" id="${movie.data.result[i].date}delete">Delete</button>
                </div>
                <div class="level-item">
                        <button class="button is-small is-light editButton" id="${movie.data.result[i].date}edit" >Edit</button>
                    </div>
            </div>
                        </div>

                </div>
            </div>
          </div>
</div>`;
    } else {
      return `<div class="container tweet" style="padding-bottom: 20px">
    <div class="card">
            <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                <div class="media-content">
                  <p class="title is-4 tweetName" style="text-transform: capitalize">${movie.data.result[i].user}</p>
                </div>
            </div>
            <div class="container tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
            ${movie.data.result[i].body}
            </div>
            <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <figure class="image is-24x24" >
                                    <img src="images/heart-empty-64.png"  alt="Not liked by you button" class="tweetLikeButton">
                            </figure>
                        </div>
                    </div>
                    <div class="level-right">
                            <div class="level-item">

                            </div>
                        </div>

                </div>
            </div>
          </div>
</div>`;
    }
    
}

const getTodos = async () => {
    try {
      let result = await axios.get('http://localhost:3000/public/movie');
      return result.data.result;
    } catch (e) {
      return [];
    }
  };
  
  // kind of a hack
  // instead of deleting, update list with what we have locally
  const updateTodos = async (todos) => {
    return (await axios.post('http://localhost:3000/private/movie', {
      data: todos
    })).data.result.posted;
  };
  
  const createTodo = async ({name = '', user = '', body = '', likes = 0, date = new Date().getTime()} = {}) => {
    return (await axios.post('http://localhost:3000/private/movie', {
      data: {
        name, user, body, likes, date
      },
      type: 'merge'},
     {headers: { 'Authorization': "Bearer " + sessionStorage.getItem('jwt') }},
     
    )).data.result.posted;
  };

  //axios.post("http://localhost:3000/private/fav/", {data: 123},{headers: { 'Authorization': "Bearer " + sessionStorage.getItem('jwt') }});


const hoverLiked = function() {
    event.target.setAttribute('src', 'images/heart-full-hover-64.png');
};

const hoverNotLiked = function() {
    event.target.setAttribute('src', 'images/heart-empty-hover-64.png');
};
const unhoverLiked = function() {
    event.target.setAttribute('src', 'images/heart-full-64.png');
};

const unhoverNotLiked = function() {
    event.target.setAttribute('src', 'images/heart-empty-64.png');
};


const handleCreateTweet = function() {
    $('#createTweetModal').addClass("is-active");
};

const handleCancelTweet = function() {
    $('#createTweetModal').removeClass("is-active");
};

const handleTweet = async function() {
    var bodyValue = $('#postTweetBody').val();
    $('#createTweetModal').removeClass("is-active");
   
        const name = "";
        const user = sessionStorage.getItem('user');
        const body = $('#postTweetBody').val();
        const likes = 0;
       // const description = e.target.description.value;
       
        let todos = (await createTodo({name, user, body, likes}));
        
       //axios.post("http://localhost:3000/private/fav/", {data: 123},{headers: { 'Authorization': "Bearer " + sessionStorage.getItem('jwt') }});


    // $.ajax({
    //     url: 'http://localhost:3000/public/movie',
    //     type: 'POST',
    //     data: {
    //         "data": bodyValue
    //     },
    //     withCredentials: true,
    // });
    //loadTweetsIntoDOM();
};



const handleLikeTweet = async function() {
    event.target.setAttribute('src', 'images/heart-full-64.png');
    
    $(event.target).removeClass("tweetLikeButton");
    $(event.target).addClass("tweetUnLikeButton");

    


    // const result = await axios({
    //     method: 'put',
    //     url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}/like`,
    //     withCredentials: true,
    //   });
    //   const result2 = await axios({
    //     method: 'get',
    //     url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}`,
    //     withCredentials: true,
    //   });
    //   //alert(result2.data.likeCount);
    //   $(`#${numId}LikeNumber`).html(result2.data.likeCount);
      
    // //loadTweetsIntoDOM();
};

const handleUnLikeTweet = async function() {
    event.target.setAttribute('src', 'images/heart-empty-64.png');

    $(event.target).removeClass("tweetUnLikeButton");
    $(event.target).addClass("tweetLikeButton");
//     const result = await axios({
//         method: 'put',
//         url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}/unlike`,
//         withCredentials: true,
//       });
//       const result2 = await axios({
//         method: 'get',
//         url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}`,
//         withCredentials: true,
//       });
//       $(`#${numId}LikeNumber`).html(result2.data.likeCount);
//       //$(`#${numId}LikeNumber`).innerHTML = result2.data.likeCount;
//   // loadTweetsIntoDOM();
};


const handleDelete = async function() {
  
    let numId = parseInt(event.target.id, 10);
    // alert(event.target.id);
    // alert(numId);
    // const result = await axios({
    //     method: 'delete',
    //     url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}`,
    //     withCredentials: true,
    //   });
    
    $(`#${numId}`).remove();
};

const handleEdit = async function() {
    currentTweetForEdit = parseInt(event.target.id, 10);
    //document.getElementById("editTweetBody").defaultValue = $(`#${currentTweetForEdit}tweetText`).text();
    $('#editTweetModal').addClass("is-active");
    //currentTweetForEdit = parseInt(event.target.id, 10);
};

const handleEditCancel = async function() {
    $('#editTweetModal').removeClass("is-active");
};

const handleEditSubmit = async function() {
    var bodyValue = $('#editTweetBody').val();
    $('#editTweetModal').removeClass("is-active");
      //  const result = await axios({
      //   method: 'put',
      //   url: `https://comp426fa19.cs.unc.edu/a09/tweets/${currentTweetForEdit}`,
      //   withCredentials: true,
      //   data: {
      //     body: bodyValue
      //   },
      // });
      document.getElementById(`${currentTweetForEdit}body`).innerHTML = bodyValue;
  // $('#test').append(renderTweet(result.data));
};

// const signOut = function() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//   });
//   alert("signed out");
// }

const loadTweetsIntoDOM = async function() {
    $('#test').empty();

    const $tweetStart = $('#tweets');

    const result = await axios({
        method: 'get',
        url: 'http://localhost:3000/private/movie',
        headers: { 'Authorization': "Bearer " + sessionStorage.getItem('jwt') }
       // withCredentials: true,
    });

    var tweetsString = '';
    // alert(result);
    // alert(jQuery.parseJSON(JSON.stringify(result)).toString());
    // alert(JSON.parse(result));
    // alert(result["result"].user);
    // alert(result.data);
    // alert(result.data.result);
    // alert(result.data.result[0]);
    for (var i = result.data.result.length-1; i > result.data.result.length-8; i--) {
        tweetsString += renderMovie(result, i);
    }
    // alert(JSON.stringify(result));
    // alert(result.data.result.user);

    $tweetStart.html(tweetsString);

    $(document).on('click', '#create', handleCreateTweet);
    // $(document).on('click', '#signOut', signOut);
    $(document).on('click', '#tweetPost', handleTweet);
    $(document).on('click', '#tweetCancel', handleCancelTweet);
    $(document).on('click', '.tweetLikeButton', handleLikeTweet);
    $(document).on('click', '.tweetUnLikeButton', handleUnLikeTweet);
    $(document).on('mouseover', '.tweetLikeButton', hoverNotLiked);
    $(document).on('mouseover', '.tweetUnLikeButton', hoverLiked);
    $(document).on('mouseout', '.tweetLikeButton', unhoverNotLiked);
    $(document).on('mouseout', '.tweetUnLikeButton', unhoverLiked);
    $(document).on('click', '.editButton', handleEdit);
    $(document).on('click', '.editTweetPost', handleEditSubmit);
    $(document).on('click', '.editTweetCancel', handleEditCancel);
    $(document).on('click', '.deleteButton', handleDelete);
    

};

/**
 * Use jQuery to execute the loadTweetsIntoDOM function after the page loads
 */
$(function() {
    loadTweetsIntoDOM();
});



var id_token1 = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token1);
    var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://http://localhost:3000/account/login');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
console.log('Signed in as: ' + xhr.responseText);
};
//alert(`Welcome, ${profile1.getName()}`);
//location.href=("homepage.html");
//sessionStorage.setItem('user', `${profile1.getName()}`);

// xhr.send('idtoken=' + id_token);




function signOut() 
{
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
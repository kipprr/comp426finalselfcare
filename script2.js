

var currentTweetForEdit = 0;

const getMovie = async function() {
    const result = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/movie',
        withCredentials: true,
    });
    return result;
};

const renderMovie = function(tweet) {
    return `<div class="container tweet" style="padding-bottom: 20px">
    <div class="card">
            <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                <div class="media-content">
                  <p class="title is-4 tweetName">Name of User</p>
                </div>
            </div>
            <div class="container tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                Body of tweet
            </div>
            <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                        <p class="content"><span class="tweetLikeNumber" style="color: #c81b1b">Number of likes</span></p>  
                        </div>
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
   
    $.ajax({
        url: 'http://localhost:3000/public/movie',
        type: 'POST',
        data: {
            "data": bodyValue
        },
        withCredentials: true,
    });
    loadTweetsIntoDOM();
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
    const result = await axios({
        method: 'delete',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}`,
        withCredentials: true,
      });
    
    $(`#${numId}`).remove();
};

const handleEdit = async function() {
    currentTweetForEdit = parseInt(event.target.id, 10);
    document.getElementById("editTweetBody").defaultValue = $(`#${currentTweetForEdit}tweetText`).text();
    $('#editTweetModal').addClass("is-active");
    currentTweetForEdit = parseInt(event.target.id, 10);
};

const handleEditCancel = async function() {
    $('#editTweetModal').removeClass("is-active");
};

const handleEditSubmit = async function() {
    var bodyValue = $('#editTweetBody').val();
    $('#editTweetModal').removeClass("is-active");
      const result = await axios({
        method: 'put',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${currentTweetForEdit}`,
        withCredentials: true,
        data: {
          body: bodyValue
        },
      });
    loadTweetsIntoDOM(); 
  // $('#test').append(renderTweet(result.data));
};

const loadTweetsIntoDOM = async function() {
    $('#test').empty();

    const $tweetStart = $('#tweets');
    

    const result = $.ajax({
        url: 'http://localhost:3000/public/movie',
        type: 'GET',
        withCredentials: true,
    });

    var tweetsString = '';
    tweetsString = renderMovie(result.data);

    $tweetStart.html(tweetsString);

    $(document).on('click', '#create', handleCreateTweet);
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
    $(document).on('click', '.tweetRetweetButton', handleRetweet);
    $(document).on('click', '.tweetUnRetweetButton', handleUnRetweet);
    $(document).on('click', '.tweetReplyButton', handleReply);
    $(document).on('click', '.replyTweetCancel', handleReplyCancel);
    $(document).on('click', '.replyTweetPost', handleReplySubmit);


};

/**
 * Use jQuery to execute the loadTweetsIntoDOM function after the page loads
 */
$(function() {
    loadTweetsIntoDOM();
});
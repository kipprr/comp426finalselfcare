
// Returns 50 most recent tweets in JSON array

var loadCounter = 0;
var currentTweetForEdit = 0;
var currentTweetForReply = 0;

const get50Tweets = async function() {
    const result = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/movies',
        withCredentials: true,
    });
    return result;
};

const renderTweet = function(tweet) {
    // Renders a single tweet that gets passed in
    if (tweet.type == "tweet") {

    if(tweet.isLiked) {
        return `<div class="container tweet" style="padding-bottom: 20px">
        <div class="card">
                <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                    <div class="media-content">
                      <p class="title is-4 tweetName">${tweet['author'].toLowerCase()}</p>
                    </div>
                </div>
                <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                    ${tweet.body.toLowerCase()}
                </div>
                <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                            <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetUnLikeButton" id="${tweet.id}LikeButton">
                                        <img src="images1/heart-full-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                        <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                            </div>
                            <div class="level-item">
                                    <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                            <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
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
    } else if (tweet.isMine) {
return `<div class="container tweet" style="padding-bottom: 20px" id="${tweet.id}">
<div class="card">
        <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
            <div class="media-content">
              <p class="title is-4 tweetName">${tweet['author'].toLowerCase()}</p>
            </div>
        </div>
        <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
            ${tweet.body.toLowerCase()}
        </div>
        <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                    <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                    </div>
                    <div class="level-item">
                        <figure class="image is-24x24 tweetLikeButton" id="${tweet.id}LikeButton">
                                <img src="images1/heart-empty-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                        </figure>
                    </div>
                    <div class="level-item">
                        <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                        </div>
                        <div class="level-item">
                            <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                    <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                            </figure>
                        </div>
                        <div class="level-item">
                        <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                        </div>
                        <div class="level-item">
                                <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                        <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
                                </figure>
                            </div>
                    </div>
                    <div class="level-right">
                            <div class="level-item">
                                <button class="button is-small is-light deleteButton" id="${tweet.id}DeleteButton">delete</button>
                            </div>
                            <div class="level-item">
                                    <button class="button is-small is-light editButton" id="${tweet.id}EditButton">edit</button>
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
                  <p class="title is-4 tweetName">${tweet['author'].toLowerCase()}</p>
                </div>
            </div>
            <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                ${tweet.body.toLowerCase()}
            </div>
            <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                        <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                        </div>
                        <div class="level-item">
                            <figure class="image is-24x24 tweetLikeButton" id="${tweet.id}LikeButton">
                                    <img src="images1/heart-empty-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                            </figure>
                        </div>
                        <div class="level-item">
                            <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                        <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                            </div>
                            <div class="level-item">
                                    <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                            <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
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

    } else if (tweet.type == "retweet") {

    if(tweet.isLiked) {

        let content = `retweeted by ${tweet.author.toLowerCase()}`;

        let parentAuthor = '';
        if(tweet.parent) {
            parentAuthor = `${tweet.parent.author.toLowerCase()}`;
        } else {
            parentAuthor = `${tweet.author.toLowerCase()}`;
        }

        return `<div class="container tweet" style="padding-bottom: 20px">
        <div class="card">
                <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                    <div class="media-content">
                      <p class="title is-4 tweetName">${parentAuthor}<span class="content is-small is-italic" style="padding-left: 10px">${content}</span></p>
                       <!–– fix ––>
                    </div>
                </div>
                <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                    ${tweet.body.toLowerCase()}
                </div>
                <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                            <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetUnLikeButton" id="${tweet.id}LikeButton">
                                        <img src="images1/heart-full-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                        <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                            </div>
                            <div class="level-item">
                                    <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                            <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
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
    } else if (tweet.isMine) {

        let content = `retweeted by ${tweet.author.toLowerCase()}`;

        let parentAuthor = '';
        if(tweet.parent) {
            parentAuthor = `${tweet.parent.author.toLowerCase()}`;
        } else {
            parentAuthor = `${tweet.author.toLowerCase()}`;
        }


return `<div class="container tweet" style="padding-bottom: 20px" id="${tweet.id}">
<div class="card">
        <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
            <div class="media-content">
              <p class="title is-4 tweetName">${parentAuthor}<span class="content is-small is-italic" style="padding-left: 10px">${content}</span></p>
               <!–– fix ––>
            </div>
        </div>
        <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
            ${tweet.body.toLowerCase()}
        </div>
        <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                    <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                    </div>
                    <div class="level-item">
                        <figure class="image is-24x24 tweetLikeButton" id="${tweet.id}LikeButton">
                                <img src="images1/heart-empty-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                        </figure>
                    </div>
                    <div class="level-item">
                        <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                        </div>
                        <div class="level-item">
                            <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                    <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                            </figure>
                        </div>
                        <div class="level-item">
                        <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                        </div>
                        <div class="level-item">
                                <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                        <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
                                </figure>
                            </div>
                    </div>
                    <div class="level-right">
                            <div class="level-item">
                                <button class="button is-small is-light deleteButton" id="${tweet.id}DeleteButton">delete</button>
                            </div>
                            <div class="level-item">
                                    <button class="button is-small is-light editButton" id="${tweet.id}EditButton">edit</button>
                                </div>
                        </div>

            </div>
        </div>
      </div>
</div>`;
    } else {

        let content = `retweeted by ${tweet.author.toLowerCase()}`;

        let parentAuthor = '';
        if(tweet.parent) {
            parentAuthor = `${tweet.parent.author.toLowerCase()}`;
        } else {
            parentAuthor = `${tweet.author.toLowerCase()}`;
        }
    
    return `<div class="container tweet" style="padding-bottom: 20px">
    <div class="card">
            <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                <div class="media-content">
                
                  <p class="title is-4 tweetName">${parentAuthor}<span class="content is-small is-italic" style="padding-left: 10px">${content}</span></p> 
                 <!–– fix ––>
                </div>
            </div>
            <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                ${tweet.body.toLowerCase()}
            </div>
            <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                        <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                        </div>
                        <div class="level-item">
                            <figure class="image is-24x24 tweetLikeButton" id="${tweet.id}LikeButton">
                                    <img src="images1/heart-empty-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                            </figure>
                        </div>
                        <div class="level-item">
                            <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                        <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                            </div>
                            <div class="level-item">
                                    <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                            <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
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
    
    } else if (tweet.type == "reply") {  

        let content = '';
        if(tweet.parent) {
            content = `replying to ${tweet.parent.author.toLowerCase()}`;
        } else {
            content = `reply`;
        }
       
    if(tweet.isLiked) {
        return `<div class="container tweet" style="padding-bottom: 20px">
        <div class="card">
                <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                    <div class="media-content">
                      <p class="title is-4 tweetName">${tweet['author'].toLowerCase()} <span class="content is-small is-italic" style="padding-left: 10px">${content}</span></p>
                       <!–– fix ––>
                    </div>
                </div>
                <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                    ${tweet.body.toLowerCase()}
                </div>
                <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                    <div class="level">
                        <div class="level-left">
                            <div class="level-item">
                            <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetUnLikeButton" id="${tweet.id}LikeButton">
                                        <img src="images1/heart-full-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                        <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                            </div>
                            <div class="level-item">
                                    <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                            <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
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
    } else if (tweet.isMine) {

        let content = '';
        if(tweet.parent) {
            content = `replying to ${tweet.parent.author.toLowerCase()}`;
        } else {
            content = `reply`;
        }


return `<div class="container tweet" style="padding-bottom: 20px" id="${tweet.id}">
<div class="card">
        <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
            <div class="media-content">
              <p class="title is-4 tweetName">${tweet['author'].toLowerCase()}<span class="content is-small is-italic" style="padding-left: 10px">${content}</span></p>
               <!–– fix ––>
            </div>
        </div>
        <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
            ${tweet.body.toLowerCase()}
        </div>
        <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                    <p class="content"><span class="tweetLikeNumber"  id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                    </div>
                    <div class="level-item">
                        <figure class="image is-24x24 tweetLikeButton" id="${tweet.id}LikeButton">
                                <img src="images1/heart-empty-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                        </figure>
                    </div>
                    <div class="level-item">
                        <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                        </div>
                        <div class="level-item">
                            <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                    <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                            </figure>
                        </div>
                        <div class="level-item">
                        <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                        </div>
                        <div class="level-item">
                                <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                        <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
                                </figure>
                            </div>
                    </div>
                    <div class="level-right">
                            <div class="level-item">
                                <button class="button is-small is-light deleteButton" id="${tweet.id}DeleteButton">delete</button>
                            </div>
                            <div class="level-item">
                                    <button class="button is-small is-light editButton" id="${tweet.id}EditButton">edit</button>
                                </div>
                        </div>

            </div>
        </div>
      </div>
</div>`;
    } else {

        let content = '';
        if(tweet.parent) {
            content = `replying to ${tweet.parent.author.toLowerCase()}`;
        } else {
            content = `reply`;
        }
    
    return `<div class="container tweet" style="padding-bottom: 20px">
    <div class="card">
            <div class="card-content" style="padding-bottom: 10px; padding-top: 20px">
                <div class="media-content">
                
                  <p class="title is-4 tweetName">${tweet['author'].toLowerCase()}<span class="content is-small is-italic" style="padding-left: 10px"> ${content}</span></p> 
                   <!–– fix ––>
                </div>
            </div>
            <div class="container tweetText" id="${tweet.id}tweetText" style="padding-left: 25px; padding-right: 20px; padding-bottom: 0px; padding-top: 0px">
                ${tweet.body.toLowerCase()}
            </div>
            <div class="container" style="padding-left: 25px; padding-bottom: 20px; padding-top: 10px; padding-right: 20px">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                        <p class="content"><span class="tweetLikeNumber" id="${tweet.id}LikeNumber" style="color: #c81b1b">${tweet.likeCount}</span></p>  
                        </div>
                        <div class="level-item">
                            <figure class="image is-24x24 tweetLikeButton" id="${tweet.id}LikeButton">
                                    <img src="images1/heart-empty-64.png" id="${tweet.id}LikeButton" alt="Not liked by you button">
                            </figure>
                        </div>
                        <div class="level-item">
                            <p class="content"><span class="tweetRetweetNumber" style="color: black">${tweet.retweetCount}</span></p>  
                            </div>
                            <div class="level-item">
                                <figure class="image is-24x24 tweetRetweetButton" id="${tweet.id}RetweetButton">
                                        <img src="images1/retweet-64.png" id="${tweet.id}RetweetButton" alt="Retweet button">
                                </figure>
                            </div>
                            <div class="level-item">
                            <p class="content"><span class="tweetReplyNumber" style="color: black">${tweet.replyCount}</span></p>  
                            </div>
                            <div class="level-item">
                                    <figure class="image is-24x24 tweetReplyButton" id="${tweet.id}ReplyButton">
                                            <img src="images1/comment-64.png" id="${tweet.id}ReplyButton" alt="Reply button">
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
};

const hoverLiked = function() {
    event.target.setAttribute('src', 'images1/heart-full-hover-64.png');
};

const hoverNotLiked = function() {
    event.target.setAttribute('src', 'images1/heart-empty-hover-64.png');
};
const unhoverLiked = function() {
    event.target.setAttribute('src', 'images1/heart-full-64.png');
};

const unhoverNotLiked = function() {
    event.target.setAttribute('src', 'images1/heart-empty-64.png');
};

const hoverRetweet = function() {
    event.target.setAttribute('src', 'images1/retweet-hover-64.png');
};

const hoverComment= function() {
    event.target.setAttribute('src', 'images1/comment-hover-64.png');
};
const unhoverRetweet = function() {
    event.target.setAttribute('src', 'images1/retweet-64.png');
};

const unhoverComment = function() {
    event.target.setAttribute('src', 'images1/comment-64.png');
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
    const result = await axios({
        method: 'post',
        url: 'http://localhost:3000/public/movies',
        withCredentials: true,
        data: {
          body: bodyValue
        },
      });
    loadTweetsIntoDOM();
};

const handleLoadMore = async function() {
    const $tweetStart = $('#tweets');
    loadCounter++;
    
    let num = 50 + loadCounter*50;
    const result = await axios({
        method: 'get',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
        params: {
            skip: num
          }
    });

    var tweetsString = '';
    for (var i = 0; i < 50; i++) {
        tweetsString += renderTweet(result.data[i]);
    }
    $tweetStart.append(tweetsString);
};

const handleLikeTweet = async function() {
    event.target.setAttribute('src', 'images1/heart-full-64.png');
    let numId = parseInt(event.target.id, 10);
    $(`#${event.target.id}`).removeClass("tweetLikeButton");
    $(`#${event.target.id}`).addClass("tweetUnLikeButton");
    const result = await axios({
        method: 'put',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}/like`,
        withCredentials: true,
      });
      const result2 = await axios({
        method: 'get',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}`,
        withCredentials: true,
      });
      //alert(result2.data.likeCount);
      $(`#${numId}LikeNumber`).html(result2.data.likeCount);
      
    //loadTweetsIntoDOM();
};

const handleUnLikeTweet = async function() {
    event.target.setAttribute('src', 'images1/heart-empty-64.png');
    let numId = parseInt(event.target.id, 10);
     $(`#${event.target.id}`).removeClass("tweetUnLikeButton");
     $(`#${event.target.id}`).addClass("tweetLikeButton");
    const result = await axios({
        method: 'put',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}/unlike`,
        withCredentials: true,
      });
      const result2 = await axios({
        method: 'get',
        url: `https://comp426fa19.cs.unc.edu/a09/tweets/${numId}`,
        withCredentials: true,
      });
      $(`#${numId}LikeNumber`).html(result2.data.likeCount);
      //$(`#${numId}LikeNumber`).innerHTML = result2.data.likeCount;
  // loadTweetsIntoDOM();
};

const handleRetweet = async function() {
    event.target.setAttribute('src', 'images1/retweet-clicked.png');

     let numId = parseInt(event.target.id, 10);
     $(`#${event.target.id}`).removeClass("tweetRetweetButton");
     $(`#${event.target.id}`).addClass("tweetUnRetweetButton");

     let bodyVal = $(`#${numId}tweetText`).text();
 

       const result = await axios({
        method: 'post',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
        data: {
          "type": "retweet",
          "parent": numId,
          "body": bodyVal
        },
      });

      $('#test').append(renderTweet(result.data));
     // loadTweetsIntoDOM();
};

const handleUnRetweet = async function() {


};

const handleReply = async function() {
    $('#replyTweetModal').addClass("is-active");
    currentTweetForReply = parseInt(event.target.id, 10);
};

const handleReplyCancel = async function() {
    $('#replyTweetModal').removeClass("is-active");
};


const handleReplySubmit = async function() {
    
     let bodyVal = $('#replyTweetBody').val();
     $('#replyTweetModal').removeClass("is-active");
     
       const result = await axios({
        method: 'post',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        withCredentials: true,
        data: {
          "type": "reply",
          "parent": currentTweetForReply,
          "body": bodyVal
        },
      });

      //$('#test').append(renderTweet(result.data));
      loadTweetsIntoDOM();
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
    
    // const result = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/public/movies',
    //     withCredentials: true,
    // });

    var tweetsString = '';
    // for (var i = 0; i < 50; i++) {
    //     tweetsString += renderTweet(result.data[i]);
    // }

    $tweetStart.html(tweetsString);

    $(document).on('click', '#create', handleCreateTweet);
    $(document).on('click', '#tweetPost', handleTweet);
    $(document).on('click', '#tweetCancel', handleCancelTweet);
    $(document).on('click', '#loadMore', handleLoadMore);
    $(document).on('click', '.tweetLikeButton', handleLikeTweet);
    $(document).on('click', '.tweetUnLikeButton', handleUnLikeTweet);
    $(document).on('mouseover', '.tweetLikeButton', hoverNotLiked);
    $(document).on('mouseover', '.tweetUnLikeButton', hoverLiked);
    $(document).on('mouseout', '.tweetLikeButton', unhoverNotLiked);
    $(document).on('mouseout', '.tweetUnLikeButton', unhoverLiked);
    $(document).on('mouseover', '.tweetRetweetButton', hoverRetweet);
    $(document).on('mouseover', '.tweetReplyButton', hoverComment);
    $(document).on('mouseout', '.tweetRetweetButton', unhoverRetweet);
    $(document).on('mouseout', '.tweetReplyButton', unhoverComment);
    $(document).on('click', '.editButton', handleEdit);
    $(document).on('click', '.editTweetPost', handleEditSubmit);
    $(document).on('click', '.editTweetCancel', handleEditCancel);
    $(document).on('click', '.deleteButton', handleDelete);
    $(document).on('click', '.tweetRetweetButton', handleRetweet);
    $(document).on('click', '.tweetUnRetweetButton', handleUnRetweet);
    $(document).on('click', '.tweetReplyButton', handleReply);
    $(document).on('click', '.replyTweetCancel', handleReplyCancel);
    $(document).on('click', '.replyTweetPost', handleReplySubmit);
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            handleLoadMore();
        }
    };


};

/**
 * Use jQuery to execute the loadTweetsIntoDOM function after the page loads
 */
$(function() {
    loadTweetsIntoDOM();
    loadCounter = 0;
});
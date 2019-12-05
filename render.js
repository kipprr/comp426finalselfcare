
export async function headerTweet () 
{
    const $root = $('#root');
    let tweets= `
    <section class="hero is-fullheight is-dark">
    <div class="hero-body">
        <div class="container">
            <figure>
                <img  class="is-rounded " id = logosmall src="images/logo.png" alt="Placeholder image">
            </figure>
            <h1 class="title">
                Sign Up
            </h1>
                <form>
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Enter Name" name="username">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Enter Password">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Repeat Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Re-Enter Password" name="password">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Account type</label>
                        <div class="control">
                            <div class="select">
                                <select name="accountType">
                                    <option>Student</option>
                                    <option>Teacher</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-right">
                            <div class="control">
                            <button class=" button is-medium  is-danger CancelButton" type="cancel" value="Cancel">Cancel</button>
                            <button class=" button is-medium  is-danger SubmitButton" type="submit"  value="Save">Submit</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    
</section>
    `;
    $root.append(tweets);
}
export async function renderTweets(event) 
{
    event.preventDefault();
const $root = $('#root');
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/account/create',
        data: {
            "name": username,
            "pass": password,
            "data": {
                "firstname": firstname
            }
        }
    });
    $root.append(tweets);
}


/*export async function writeTweets(event) 
{
    event.preventDefault();
    const result = await axios({
        method: 'post',
        url: 'https://comp426fa19.cs.unc.edu/a09/tweets',
        data:
        {
            "type": "tweet",
            "body":  "" + $("textarea[id=offtweets]").val() + "",
        },
        withCredentials: true,
      });
      $('#tweeter').replaceWith(renderTweets());

}
*/

export const renderSite = function()
 {
    const $root = $('#root');
   
    headerTweet();
   // postTweets();
   $(document).on("submit", ".SubmitButton",   renderTweets);
 

    
}
$(function () 
{
    renderSite();
});
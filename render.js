/**
 * Course: COMP 426
 * Assignment: a05
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) 
{
    // TODO: Copy your code from a04 to render the hero card
    var obj= `
<div class="columns is-multiline">
<div class="column">
<div class= "container cardid" data-id="${hero.id}">
    
    
<div class="card">
  
  <div class="card-content" >
    <div class="media" style="background-color:${hero.backgroundColor}">
      <div class="media-center">
        <figure class="image is-188x188">
          <img class="is-rounded "  src="${hero.img}" border="7" style= "border-color: white" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
       <p class="title is-1"><b> <span style="color:${hero.color}">${hero.name}</span></b></p> 
      
      </div>
    </div>

    <div class="content">
   
    <p class="subtitle is-2 has-text-grey"><i>"${hero.subtitle}"</i></p>
    <p><b>Alter ego:</b> ${hero.first} ${hero.last}</p>
   
    <p><b>First Apperance: </b> <time datetime="${hero.firstSeen}">${hero.firstSeen.toLocaleDateString("en-US")}</time></p>
    <div class="control">
      <p>${hero.description}</p>
    </div>
      
        <div class="control">
        <button class=" button is-medium is-rounded is-danger EditButton" type="edit"  data-id="${hero.id}"  >Edit</button>
        </div>
    </div>
    </div>
  </div>
  </div>
</div>`;

   return  obj;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) 
{
    // TODO: Copy your code from a04 to render the hero edit form
    var obj= `<form class="heroForm" data-id="${hero.id}">
    <div class="field">
         <figure class="image is-128x128">
             <img class="is-rounded " src="${hero.img}" alt="Placeholder image">
        </figure>
        <label class="label">Hero Name</label>
        <div class="control">
            <input class="Name input" type="text" placeholder="Hero Name" value="${hero.name}">
        </div>
    </div>
    <div class="field">
        <label class="label">First Name</label>
        <div class="control">
            <input class="First input" type="text" placeholder="First Name" value="${hero.first}">
        </div>
    </div>
    <div class="field">
        <label class="label">Last Name </label>
        <div class="control">
            <input class="Last input" type="text" placeholder="Last Name" value="${hero.last}">
        </div>
    </div>
    <div class="field">
        <label class="label">Subtitle </label>
        <div class="control">
            <input class="Sub input" type="text" placeholder="Suntitle" value="${hero.subtitle}">
        </div>
    </div>
    <div class="field">
        <label class="label">First Seen </label>
        <div class="control">
            <input class="Seen input" type="text" id="start" placeholder="First Seen" value="${hero.firstSeen.toLocaleDateString("en-US")}">
        </div>
    </div>
    <div class="field">
        <label class="label">Description </label>
        <div class="control">
            <textarea class="Description textarea" placeholder="Description">${hero.description}</textarea>
        </div>
    </div>
    
    <div class="field is-grouped is-grouped-right">
        <div class="control">
        <button class=" button is-medium  is-dark CancelButton" type="cancel" data-id="${hero.id}" value="Cancel">Cancel</button>
        <button class=" button is-medium  is-dark SubmitButton" type="submit" data-id="${hero.id}" value="Save">Save</button>
        </div>
    </div>
</div>
</form>`
    return obj
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead//
    //$("editButton").on("click", null, hero.id, handleEditButtonPress);
    let handelHeroEdit = $(event.target);
    let hero_Id = $(event.target).data('id');
    
    let thisHero = heroicData.find(hero => {
        return hero.id == hero_Id;
    });
    let change = handelHeroEdit.closest('.cardid');
    change.replaceWith(renderHeroEditForm(thisHero));

};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead

    let hadelCancelButton = $(event.target);
    let hero_id = $(event.target).data('id');
    
    let thisHero = heroicData.find(hero => {
        return hero.id == hero_id
    });
    
    let keep = hadelCancelButton.closest('.heroForm');
    keep.replaceWith(renderHeroCard(thisHero));

};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) 
{
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead
    let handelSubmitButton = $(event.target);
    let hero_id = $(event.target).data('id');
    let thisHero = heroicData.find(hero => {
        return hero.id == hero_id
    });

    
     let save = handelSubmitButton.closest('.heroForm');

     thisHero.name = save.find('.Name').val();
     thisHero.first = save.find('.First').val();
     thisHero.last = save.find('.Last').val();
     thisHero.subtitle = save.find('.Sub').val();
     thisHero.firstSeen = new Date(save.find('.Seen').val());
     thisHero.description = save.find('.Description').val();

    save.replaceWith(renderHeroCard(thisHero));
};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part
    let heroArray = [];
    for(let i=0; i<heroes.length;i++)
    {
        //console.log(heroes[i]);
        heroArray[i]= renderHeroCard(heroes[i]);
    }
   
    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part
    $root.append(heroArray);
    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //       clicking the edit button
    $root.on("click",".EditButton",handleEditButtonPress);
    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form
    $root.on("click",".SubmitButton",handleEditFormSubmit);
    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button
    $root.on("click",".CancelButton",handleCancelButtonPress);
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});

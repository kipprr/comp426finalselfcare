
/*
// global variables
*/

let name = " ";
let career = " ";
let relstat = " ";
let conflict = " ";
let tradition = " ";


/*
// create root
*/

export async function createHome(){
    $('#root').append( 
    `
    <div>
    <table class = "table has-text-centered">
    <tbody class = >
        <tr class = "name" >
            <td style = "text-align: center">
                <button class = "button is-large is-success nameButton">
                    Name
                </button>
            </td style = "text-align: center">
            <td>
                <p class = "nameText" id = "inputText">
                    
                </p>
            </td>
        </tr>
        <tr class = "career">
                <td style = "text-align: center">
                    <button class = "button is-large careerButton">
                        <span style = "color: green">Career</span> 
                    </button>
                </td>
                <td style = "text-align: center">
                    <p class = "careerText" id = "inputText">
                        
                    </p>
                </td>
            </tr>
        <tr class = "relStatus">
            <td style = "text-align: center">
                <button class = "button is-large is-success relStatusButton">
                    Relationship Status
                </button>
            </td>
            <td style = "text-align: center">
                <p class = "relText" id = "inputText">
                    
                </p>
            </td>
        </tr>
        <tr class = "conflict">
            <td style = "text-align: center">
                <button class = "button is-large conflictButton">
                    <span style = "color: green">Conflict</span>
                </button>
            </td>
            <td style = "text-align: center">
                <p class = "conflictText" id = "inputText">
                    
                </p>
            </td>
        </tr>
        <tr class = "tradition">
            <td style = "text-align: center">
                <button class = "button is-large is-success traditionButton">
                    Christmas Tradition
                </button>
            </td>
            <td style = "text-align: center">
                <p class = "tradText" id = "inputText">
                    
                </p>
            </td>
        </tr>
    </tbody>
    </table>

    </div>
    <br>
    <div>
        <button class = "button is-large is-success createButton">
            Create Your Story!
        </button>
        <br>
        <br>
        <p class = "createText"> </p>
        <br>
    </div>
    `);
}



/*
//choose your fighters
*/

export const chooseName = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "Emma";
    } else if (num == 2) {
        return "Caroline";
    } else if (num == 3) {
        return "Lily";
    }else {
        return "Kate";
    }
}

export const chooseCareer = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "small business owner";
    } else if (num == 2) {
        return "marketing manager";
    } else if (num == 3) {
        return "hotel manager";
    }else {
        return "teacher";
    }
}

export const chooseRelStatus = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "in a long term relationship";
    } else if (num == 2) {
        return "a serial date, but nothing serious";
    } else if (num == 3) {
        return "prioritizing work over relationships";
    }else {
        return "always single, never been in a relationship";
    }
}

export const chooseConflict = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "her job requires relocation from a small town to big city";
    } else if (num == 2) {
        return "she just got fired from her job";
    } else if (num == 3) {
        return "she just got dumped";
    }else {
        return "there's been a family health emergency";
    }
}

export const chooseTradition = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "decorating the Christmas tree with family";
    } else if (num == 2) {
        return "carolling with friends";
    } else if (num == 3) {
        return "preparing Christmas Day dinner";
    }else {
        return "getting kised under misteltoe";
    }
}

/*
// button handlers
*/

export const handleName = function(event) {
    name = chooseName();
    $('.nameText').replaceWith(name);
}

export const handleCareer = function(event) {
    career = chooseCareer();
    $('.careerText').replaceWith(career);
}

export const handleRelStatus = function(event) {
    relstat = chooseRelStatus();
    $('.relText').replaceWith(relstat);
}

export const handleConflict = function(event) {
    conflict = chooseConflict();
    $('.conflictText').replaceWith(conflict);
}

export const handleTradition = function(event) {
    tradition = chooseTradition();
    $('.tradText').replaceWith(tradition);
}

export const handleCreate = function(event) {
    $('.createText').replaceWith(
        `Meet ${name}, she is a ${career}!  This holiday season, she's been thinking about how she has been ${relstat}. Recently, she just received news that ${conflict}.  Will she be able to have a happy holiday, ${tradition}? Watch tonight to find out!`
    );
}

export const postHTML = function(event){
    $('#root').append(`<button class = "button is-large postButton"> Post!</button>`);    
}


/*
// complete render
*/

export const renderHome = function() {

    createHome();
    $(document).on("click",".nameButton", handleName);
    $(document).on("click",".careerButton", handleCareer);
    $(document).on("click",".relStatusButton", handleRelStatus);
    $(document).on("click",".conflictButton",handleConflict);
    $(document).on("click",".traditionButton",handleTradition);
    $(document).on("click",".createButton",handleCreate);
    $(document).on("click",".createButton",postHTML)
}


$(function() {
    renderHome();
});

$(function() 
{
  const $form = $('#accountinfo-form');
  const $message = $('#message3');
  //event.preventDefault();

  $message.html('');

  
  //console.log(data2);
  
  let token = sessionStorage.getItem('user');
  
    $message.html(` <h1 class = "title" id = "welcome">
    Let's Build a Cheesy <span style = "color: green">Christmas</span> Romance Movie ${token}!
</h1>
`);
 
  
});
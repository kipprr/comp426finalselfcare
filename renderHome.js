
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
        return "Small business owner";
    } else if (num == 2) {
        return "Marketing manager";
    } else if (num == 3) {
        return "Hotel manager";
    }else {
        return "Teacher";
    }
}

export const chooseRelStatus = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "In a long term relationship";
    } else if (num == 2) {
        return "A serial, non-serious dater";
    } else if (num == 3) {
        return "Prioritizes work over relationships";
    }else {
        return "Has never been in a relationship";
    }
}

export const chooseConflict = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "Job requires relocation from small town to big city";
    } else if (num == 2) {
        return "Recently fired from job";
    } else if (num == 3) {
        return "Just got dumped";
    }else {
        return "Family health emergency";
    }
}

export const chooseTradition = function() {
    let num = Math.floor(Math.random() * 4);
    if(num == 1) {
        return "Decoration Christmas tree with family";
    } else if (num == 2) {
        return "Carolling with friends";
    } else if (num == 3) {
        return "Preparing Christmas Day dinner";
    }else {
        return "Getting kised under misteltoe";
    }
}

/*
// button handlers
*/

export const handleName = function(event) {
    $('.nameText').replaceWith(chooseName());
}

export const handleCareer = function(event) {
    $('.careerText').replaceWith(chooseCareer());
}

export const handleRelStatus = function(event) {
    $('.relText').replaceWith(chooseRelStatus());
}

export const handleConflict = function(event) {
    $('.conflictText').replaceWith(chooseConflict());
}

export const handleTradition = function(event) {
    $('.tradText').replaceWith(chooseTradition());
}




/*
// complete render
*/

export const renderHome = function() {

    createHome();
    //name
    $(document).on("click",".nameButton", handleName);
    $(document).on("click",".careerButton", handleCareer);
    $(document).on("click",".relStatusButton", handleRelStatus);
    $(document).on("click",".conflictButton",handleConflict);
    $(document).on("click",".traditionButton",handleTradition);
}


$(function() {
    renderHome();
});
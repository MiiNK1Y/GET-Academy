// view -----------------------------------------------
const app = document.getElementById("app");

// data to work with.
let text = "";
let reversedText = "";

// shows in the view.
// hidden by default.
let reversedDiv = "";

// shows by default.
let inputField = /*HTML*/ `
        <input 
            id="userInput" 
            type="text" 
            oninput="text = this.value; modString();" 
            placeholder="Type some text here." />
        `;


// view -----------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${reversedDiv}
        ${inputField}
    `;
    focusInputField();
}


// controller -----------------------------------------
// functions that works with data.
function modString() {
    if (text) {
        stringReverse();
        showReverse();
        setInputField();
    } else {
        // reset the view if there is no text in the input.
        reversedDiv = "";
    }
    updateView();
}

function stringReverse() {
    reversedText = "";

/*
*   Cheap version:
*   for (let char = 0; char != text.length; char++) {
*       reversedText = text.split("").reverse().join("");
*   }
*/  

    // Big brain version:
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i]
    }
}

// functions that modifies the model.
function showReverse() {
    reversedDiv = /*HTML*/ `
        <div id="reversed">
            <div id="reversed__text">${reversedText}</div>
        </div>
    `;
}

function setInputField() {
    inputField = /*HTML*/ `
        <input 
            id="userInput" 
            type="text" 
            oninput="text = this.value; modString();" 
            placeholder="Type some text here." />
        `;
}

// meta functions that works with the site after loading.
function focusInputField() {
    document.getElementById("userInput").focus();
    document.getElementById("userInput").value = text;
}

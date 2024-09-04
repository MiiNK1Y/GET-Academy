// view -----------------------------------------------
const app = document.getElementById("app");

const vocals = [
                "a", "e", "y", "i", "o", "u", "ø", "æ", "å",
                "A", "E", "Y", "I", "O", "U", "Ø", "Æ", "Å"
                ];

// data to work with.
let numVocals = 0;
let text = "";

// shows in the view.
// hidden by default.
let counterDiv = "";

// shows by default.
let inputField = /*HTML*/ `
        <input 
            id="userInput" 
            type="text" 
            oninput="text = this.value; checkString();" 
            placeholder="Type some text here." />
        `;


// view -----------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${counterDiv}
        ${inputField}
    `;
    focusInputField();
}


// controller -----------------------------------------
// functions that works with data.
function checkString() {
    if (text) {
        isVocal();
        showCounter();
        setInputField();
    } else {
        // reset the view if there is no text in the input.
        counterDiv = "";
    }
    updateView();
}

function isVocal() {
    numVocals = 0;
    for (let char = 0; char != text.length; char++) {
        if (vocals.includes(text[char])) numVocals++; 
    }
}

// functions that modifies the model.
function showCounter() {
    counterDiv = /*HTML*/ `
        <div id="counter">
            <div id="counter__vocals">${numVocals}</div>
            <div>&nbsp;of&nbsp;</div>
            <div id="counter__chars">${text.length}</div>
            <div>&nbsp;are vocals!</div>
        </div>
    `;
}

function setInputField() {
    inputField = /*HTML*/ `
        <input 
            id="userInput" 
            type="text" 
            oninput="text = this.value; checkString();" 
            placeholder="Type some text here." />
        `;
}

// meta functions that works with the site after loading.
function focusInputField() {
    document.getElementById("userInput").focus();
    document.getElementById("userInput").value = text;
}

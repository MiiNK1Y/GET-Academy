// model
const app = document.getElementById("app");

const vocals = ["a", "e", "i", "o", "u", "y", "æ", "ø", "å"];

let numVocal = 0;
let inputField;

let text = "";
let submitButton = "";

// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${counter()}
        ${setInputField()}
        ${submitButton}
    `;
    focusInputField();
}

// controller
function showButton() {
    submitButton = text ? "<button>submit</button>" : '';
}

function setInputField() {
    inputField = /*HTML*/ `
        <input 
            id="userInput" 
            type="text" 
            oninput="text = this.value; checkString();" 
            placeholder="Type some text here." />
        `;

    return inputField;
}

function focusInputField() {
    document.getElementById("userInput").focus();
    document.getElementById("userInput").value = text;
}

function checkString() {
    showButton();
    counter();
    isVocal();
    updateView();
}

function isVocal() {
    if (text) {
        numVocal = 0;
        for (let charIndex = 0; charIndex != text.length; charIndex++) {
            if (vocals.includes(text[charIndex])) numVocal++; 
        }
    }
}

function counter() {
    div = /*HTML*/ `
        <div id="counter">
            <div id="counter">${numVocal}</div>
            <div>&nbsp;of&nbsp;</div>
            <div id="counter">${text.length}</div>
            <div>&nbsp;are vocals!</div>
        </div>
    `;
    if (text) return div;
    else return "";
}

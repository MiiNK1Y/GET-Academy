// model ----------------------------------------------
const app = document.getElementById("app");

let pretext = "Click the box to generate numbers!"
let randomNum01 = "X";
let randomNum02 = "Z";

let numbers = /*HTML*/ `${randomNum01} &#65372; ${randomNum01}`;

let guessesDiv = "";
let guesses = 1;

// view -----------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div id="boxes">
            <div id="pretext">${pretext}</div>
            <div id="matching-box" onclick="setNum();">${numbers}</div>
        </div>
        ${guessesDiv}
    `;
}

// controller -----------------------------------------
function setNum() {
    guesses = 1;
    randomNum01 = getNum();
    randomNum02 = getNum();

    while (randomNum01 != randomNum02) {
        randomNum02 = getNum();
        guesses++;
    }

    pretext = "Found similar numbers!";
    numbers = /*HTML*/ `${randomNum01} &#65372; ${randomNum01}`;
    guessesDiv = /*HTML*/ `<div id="guessed">(guessed ${guesses} times!)</div>`

    updateView();
}

function getNum() {
    return Math.floor(Math.random() * 10);
}

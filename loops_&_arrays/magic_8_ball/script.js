// model
const app = document.getElementById("app");

let states = ["front", "back"];
let curState = states[0];
let EightBall;

// always visible
let EightBallFront = /*HTML*/ `
    <div id="eight_ball" onclick="eightBallClick()">
        <div id="eight_ball__front"><strong>8</strong></div>
    </div>
    `;

let EightBallBack = /*HTML*/ `
    <div id="eight_ball" onclick="eightBallClick()">
        <div id="eight_ball__back"></div>
    </div>
    `;


// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${show8Ball()}
    `;
}


// controller
function show8Ball() {
    if (curState == "front") {
        return EightBallFront;
    } else if (curState == "back") {
        return EightBallBack;
    };
}

function eightBallClick() {
    if (curState == "front") {
        curState = "back";
    } else if (curState == "back") {
        curState = "front";
    };
    updateView();
}
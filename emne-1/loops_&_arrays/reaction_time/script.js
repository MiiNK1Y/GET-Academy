// model ----------------------------------------
const app = document.getElementById("app");

let selectedLampIndex;
let timer;
let timedSec;

// view -----------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${timed()}
        <div id="lamp_grid">${makeLamps()}</div>
    `;

    randomOn();
}

function makeLamps() {
    let html = "";
    for (let num = 0; num < 25; num++) html += /*HTML*/ `<div id="lamp_${num}" class="lamp"></div>`;
    return html;
}

function timed() {
    if (timedSec) return /*HTML*/ `
        <div id="timer">Your time: 
            <div id="time">${timedSec}</div>
        </div>
    `;

    else return ""; // return nothing, to avoid "undefined" string.
}

// controller -----------------------------------
function randomOn() {
    let amountOfLamps = document.getElementById("lamp_grid").childElementCount;
    let selectedLampIndex = Math.floor(Math.random() * amountOfLamps);
    let lamp = document.getElementById(`lamp_${selectedLampIndex}`);

    lamp.classList.add("lamp_on");
    lamp.setAttribute("onclick", "setTime()");

    // set timer when a bulb light up.
    timer = new Date().getTime();
}

function setTime(){
    let newTime = new Date().getTime();
    let timedMilli = Math.floor(newTime - timer);
    timedSec = timedMilli / 1000;

    updateView();
}

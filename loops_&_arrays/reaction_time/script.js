// model ----------------------------------------
const app = document.getElementById("app");

let selectedLampIndex;

// view -----------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div id="lamp_grid"></div>
    `
    makeLamps();
    randomOn();
}

function makeLamps() {
    const lampGrid = document.getElementById("lamp_grid");

    for (let num = 0; num < 25; num++) {
        lampGrid.innerHTML += /*HTML*/ `
            <div id="lamp_${num}" class="lamp"></div>
        `;
    }
}

// controller -----------------------------------
function randomOn() {
    let amountOfLamps = document.getElementById("lamp_grid").childElementCount;
    let selectedLampIndex = Math.floor(Math.random() * amountOfLamps);
    let lamp = document.getElementById(`lamp_${selectedLampIndex}`);

    lamp.classList.add("lamp_on");
    lamp.setAttribute("onclick", "setTime()");
}

function setTime(){
    // tmp
    updateView();
}
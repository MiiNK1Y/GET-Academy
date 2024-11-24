// model
let app = document.getElementById("app");

let num = 2;
let numArr = [];

// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div id="numbers">${numArr}</div>
        <button onclick="buttonStart()">start</button>
    `
}

// controller
function timesTwoTable() {
    for (num; num <= 20; num+=2) {
        numArr.push(num);
    }
}

function buttonStart() {
    timesTwoTable();
    updateView();
}

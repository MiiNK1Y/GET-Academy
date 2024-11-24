// model
const app = document.getElementById("app");

let cartItems = [];

// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div id="cart">
            <h3 style="padding: 5px; color: #cdd6f4;">Your cart:</h3>
        </div>
        <div id="input">
            <input id="input-item" type="text" placeholder="Type your item here!" />
            <button onclick="addItemButton()">
                <div class="button__text">add</div>
            </button>
        </div>
    `;
   
    for (let i = 0; i < cartItems.length; i++){
        document.getElementById("cart").innerHTML += cartItems[i];
    }

    // focus input on update.
    document.getElementById("input-item").focus();
}

function makeItemDiv(item) {
    return /*HTML*/ `<div class="cart__item" style="background-color: ${getRandomSelectColor()}"><li>${item}</li></div>`
}


// controller
function addItemButton() {
    let item = document.getElementById("input-item").value;
    if (item) {cartItems.push(makeItemDiv(item))};
    updateView();
}

function getRandomSelectColor() {
    const colors = ["#f5e0dc", "#f5c2e7", "#cba6f7", "#f38ba8", "#fab387", "#94e2d5", "#f9e2af", "#a6e3a1"];
    return colors[Math.floor(Math.random() * colors.length)];
}
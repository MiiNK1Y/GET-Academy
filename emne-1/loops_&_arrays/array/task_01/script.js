// model
const app = document.getElementById("app");

let items = ["Hat", "Pencil", "Dinosaur", "Showercap", "Piece of Tape"];
let textContainer = "";

// visible by default
let buttonText = "See Contents of Pockets!";
let buttonOpacity = "1"

// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div id="text-container">${textContainer}</div>
        <button style="opacity: ${buttonOpacity}" onclick="whatsInPocketsButton()">
            ${buttonText}
        </button>
    `
}

// controller
function whatsInPocketsButton() {
    if (!textContainer){ 
        for (let i = 0; i < items.length; i++){
            textContainer += /*HTML*/ `
                <div class="text-box">At round ${i}, I see:
                    <div class="text-box__item">${items[i]}</div>
                </div>
            `;
        }

        buttonText = "Put Back Into Pockets."
        buttonOpacity = "0.6"

    } else {
        buttonText = "See Contents of Pockets!";
        buttonOpacity = "1"
        textContainer = "";
    };

    updateView();
}
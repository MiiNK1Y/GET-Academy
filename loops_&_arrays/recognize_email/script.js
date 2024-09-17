// model ----------------------------------------------------------------------
let app = document.getElementById("app");

let inputString = "";
let validatingText = "";

const invalidEmail = /*HTML*/ `<div class="input invalid">Not a valid e-mail</div>`;
const validEmail = /*HTML*/ `<div class="input valid">That's an e-mail!</div>`;

// view -----------------------------------------------------------------------
updateView();
function updateView(){
    app.innerHTML = /*HTML*/ `
        <div id="text">
            ${validatingText}
        <div>
        <input
            id="input_email"
            type="text"
            oninput="inputString=this.value, checkString()"
            placeholder="e-mail"
        />
    `;

    focusInputField();
}

function focusInputField() {
    document.getElementById("input_email").focus()
    document.getElementById("input_email").value = inputString;
}

// controller -----------------------------------------------------------------
function checkString() {
    let whiteSpaceInString = inputString.includes(" ");
    let atInString = inputString.includes("@");
    
    let indexOfAt = inputString.indexOf("@");
    let indexOfDot = inputString.lastIndexOf(".");

    if (atInString && !whiteSpaceInString && (indexOfAt < indexOfDot)) {
        validatingText = validEmail;
    } else if (!inputString.length) {
        validatingText = "";
    } else {
        validatingText = invalidEmail;
    }
    updateView();
}

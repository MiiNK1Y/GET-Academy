let textField = document.getElementById("text-field");
let textString = textField.innerHTML;

function type(key) {
    textString += key.innerHTML;
    textField.innerHTML = textString;
}

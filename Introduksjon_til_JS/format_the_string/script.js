function format(string) {
    return `<div style="opacity: 0.5">output:&nbsp;</div>${string[0].toUpperCase() + string.slice(1)}`;
}

function showOutput(string) {
    let input = document.getElementById("string-input").value;
    let output = document.getElementById("output");
    let firstCharUpper = format(input);
    output.style.display = "flex";
    output.innerHTML = firstCharUpper;
}

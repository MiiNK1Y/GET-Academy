let bulb = 0;

function bulbOnOff() {
    if (!bulb) {
        bulb = 1;
        document.getElementById("bulb").style.backgroundColor = "#fdce56";
        document.getElementById("switch__slide").style.backgroundColor = "#a6e3a1";

        document.getElementById("bulb").classList.add("bulb__on");
        document.getElementById("switch__peg").classList.add("switch__peg__on");

        document.getElementById("on-off").innerHTML = "on";
    } else {
        bulb = 0;
        document.getElementById("bulb").style.backgroundColor = "";
        document.getElementById("switch__slide").style.backgroundColor = "";

        document.getElementById("bulb").classList.remove("bulb__on");
        document.getElementById("switch__peg").classList.remove("switch__peg__on");

        document.getElementById("on-off").innerHTML = "off";
    }
}
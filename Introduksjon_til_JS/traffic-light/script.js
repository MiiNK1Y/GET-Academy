let lightGreen = 0;
let lightYellow = 0;
let lightRed = 0;

function toggle(light) {
    switch (light) {
        case "red":
            doc = document.getElementById("red-light");
            if (!lightRed) {
                lightRed = 1;
                doc.classList.add("red-glow");
            } else {
                lightRed = 0;
                doc.classList.remove("red-glow");
            }
            break;

        case "yellow":
            doc = document.getElementById("yellow-light");
            if (!lightYellow) {
                lightYellow = 1;
                doc.classList.add("yellow-glow");
            } else {
                lightYellow = 0;
                doc.classList.remove("yellow-glow");
            }
            break;

        case "green":
            doc = document.getElementById("green-light");
            if (!lightGreen) {
                lightGreen = 1;
                doc.classList.add("green-glow");
            } else {
                lightGreen = 0;
                doc.classList.remove("green-glow");
            }
            break;
    }
}

function rygSequence() {
    toggle('yellow');
    setTimeout(() => {toggle('red')}, 2000);
    setTimeout(() => {toggle('green')}, 3000);
    setTimeout(() => {toggle('yellow')}, 3000);
}

function gyrSequence() {
    toggle('yellow');
    setTimeout(() => {toggle('green')}, 2000);
    setTimeout(() => {toggle('red')}, 3000);
    setTimeout(() => {toggle('yellow')}, 3000);
}

function sequence() {
    if (lightRed && !lightYellow && !lightGreen) {
        rygSequence();
    } else if (lightGreen && !lightYellow && !lightRed) {
        gyrSequence();
    }
}
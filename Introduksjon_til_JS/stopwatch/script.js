var time = 1;

function addSecond() {
    document.getElementById("seconds").innerHTML = time;
    time++;
}

function timer() {
    const my_timer = setInterval(addSecond, 1000);
}

function timerStop() {
    clearInterval(my_timer);
}
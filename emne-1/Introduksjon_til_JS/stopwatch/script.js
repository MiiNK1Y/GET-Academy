let time = 0;
let timer_running = false;
let round_time;

var my_timer;

let display_round = document.getElementById("display-round");
let show_round = document.getElementById("show-round");
let show_seconds = document.getElementById("seconds");

function addSecond() {
    time++;
    show_seconds.innerHTML = time;
}

function timerStart() {
    if (!timer_running) {
        timer_running = true;
        my_timer = setInterval(addSecond, 1000);
    }
}

function timerStop() {
    if (timer_running) {
        clearInterval(my_timer);
        timer_running = false;

        time = 0;
        round_time = 0;
        show_seconds.innerHTML = time;
        display_round.style.display = "none";
    }
}

function timerRound() {
    round_time = time;
    display_round.style.display = "flex";
    show_round.innerHTML = round_time;

    time = 0;
    show_seconds.innerHTML = time;
}

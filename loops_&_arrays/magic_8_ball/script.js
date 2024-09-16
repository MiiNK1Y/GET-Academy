// model --------------------------------------------------------------------------------
const app = document.getElementById("app");

// overlay to make the app un-interactive for a time.
const appMask = document.getElementById("app-mask");

// states made to control what HTML to show after animation passes.
const states = ["front", "message"]; // not used, only for reference.

let state = "front"; // show front on page-load.

// these are injected into the HTML, so use <br> for line-breaks.
const messageList = [
                "Hail Satan.", 
                "Kill your<br>grandma.", 
                "Ligma<br>Balls.",
                "The fuck is<br>wrong with<br>you?",
                "Don't know.",
                "Epstein didn't<br>kill<br>himself.",
                "Only you can<br>stop forest<br>fires.",
                "Suicide?",
                "Suck my<br>dick.",
                "Fuck<br>yourself.",
                "Pee, is stored<br>in<br>the balls."
                ];

let curMessage;


// view ---------------------------------------------------------------------------------
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <div id="eight_ball" class="clickable" onclick="showMessageButton()">
            ${eightBallFace()}
        </div>
    `;
}

function eightBallFace() {
    let face;

    if (state == "front") {
        setMessage(); // create a new massage every time the front is shown.

        // the front of the ball, where no message is shown.
        face = /*HTML*/ `
            <div id="eight_ball__slider" class="eight_ball__slider_front">
                <div id="eight_ball__front"><strong>8</strong></div>
                <div id="eight_ball__back">
                    <img src="triangle.png" id="triangle" class="triangle_hide" />
                    <div id="text">${curMessage}</div>
                </div>
            </div>
        `;
    } else if (state == "message") {
        // the message-side of the ball.
        face = /*HTML*/ `
            <div id="eight_ball__slider" class="eight_ball__slider_back">
                <div id="eight_ball__front"><strong>8</strong></div>
                <div id="eight_ball__back">
                    <img src="triangle.png" id="triangle" />
                    <div id="text">${curMessage}</div>
                </div>
            </div>
        `;
    };

    return face;
}

// function to stop user from spamming.
// Temporary mask the site.
function showAppMask(option) {
    if (option == true) {appMask.style.display = "block"}
    else if (option == false) {appMask.style.display = "none"}
}


// controller ---------------------------------------------------------------------------
function showMessageButton() {
    showMessage();
}

function setMessage() {
    let m = messageList[Math.floor(Math.random() * messageList.length)]
    if (m != curMessage) {curMessage = m}
    else setMessage();
}

// animation.
function showMessage() {
    let curBallClass = document.getElementById("eight_ball__slider").classList;
    let curTriangleClass = document.getElementById("triangle").classList;

    if (state == "front"){
        state = "message"; // change state for next click.
        curBallClass.remove("eight_ball__slider_front");
        curBallClass.add("eight_ball__slider_back");

        curTriangleClass.remove("triangle_hide");
        curTriangleClass.add("triangle_show");

        showAppMask(true); // temp mask the site while animation runs.

        setTimeout(function() {
            showAppMask(false);
            updateView();
        }, 2300);

    } else if (state == "message"){
        state = "front"; // change state for next click.
        curBallClass.remove("eight_ball__slider_back");
        curBallClass.add("eight_ball__slider_front");

        curTriangleClass.remove("triangle_show");
        curTriangleClass.add("triangle_hide");

        showAppMask(true); // temp mask the site while animation runs.

        setTimeout(function() {
            showAppMask(false);
            updateView();
        }, 2300);
    };
}

// model
const app = document.getElementById("app");
const appMask = document.getElementById("app-mask");

const messageList = [
                "Hail Satan.", 
                "Kill your<br>grandma.", 
                "Ligma<br>Balls.",
                "The fuck is<br>wrong with<br>you?",
                "Don't know.",
                "Epstein didn't<br>kill<br>himself.",
                "Only you can<br>stop forest<br>fires.",
                "Suicide?"
                ];


// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${eightBallSliderDiv()}
    `;
}

function eightBallSliderDiv() {
    let eightBallSlider = /*HTML*/ `
        <div id="eight_ball" class="clickable" onclick="showTextButton()">
            <div id="eight_ball__slider" class="eight_ball__slider_front">
                <div id="eight_ball__front"><strong>8</strong></div>
                <div id="eight_ball__back">
                    <img src="triangle.png" id="triangle" class="triangle_hide" />
                    <div id="text">${setMessage()}</div>
                </div>
            </div>
        </div>
    `;
    
    return eightBallSlider;
}


// controller
function setMessage() {
    return messageList[Math.floor(Math.random() * messageList.length)]
}

function showAppMask() {
    appMask.style.display = "block";
}

function hideAppMask() {
    appMask.style.display = "none";
}

function showTextButton() {
    setMessage();
    updateView();

    let ball = document.getElementById("eight_ball").classList;
    let curBallClass = document.getElementById("eight_ball__slider").classList;
    let curTriangleClass = document.getElementById("triangle").classList;

    if (
        curBallClass.contains("eight_ball__slider_front") ||
        curTriangleClass.contains("triangle_hide")
    ) {
        curBallClass.remove("eight_ball__slider_front");
        curBallClass.add("eight_ball__slider_back");
        curTriangleClass.remove("triangle_hide");
        curTriangleClass.add("triangle_show");
        ball.remove("clickable")
        ball.add("no_click");
        showAppMask();
        setTimeout(function() {
            ball.remove("no_click")
            ball.add("clickable")
            hideAppMask();
        }, 2500);
    } else if (
        curBallClass.contains("eight_ball__slider_back") ||
        curTriangleClass.contains("triangle_show")
    ) {
        curBallClass.remove("eight_ball__slider_back");
        curBallClass.add("eight_ball__slider_front");
        curTriangleClass.remove("triangle_show");
        curTriangleClass.add("triangle_hide");
        ball.remove("clickable")
        ball.add("no_click");
        showAppMask();
        setTimeout(function() {
            ball.remove("no_click")
            ball.add("clickable")
            hideAppMask();
        }, 2500);
    };
}
// model
const app = document.getElementById("app");

// always visible
let eightBallSlider = /*HTML*/ `
    <div id="eight_ball" onclick="showTextButton()">
        <div id="eight_ball__slider" class="eight_ball__slider_back">
            <div id="eight_ball__front"><strong>8</strong></div>
            <div id="eight_ball__back">
                <img src="triangle.png" id="triangle" class="triangle_hide" />
                <div id="text">Hail Satan</div>
            </div>
        </div>
    </div>
    `;


// view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        ${eightBallSlider}
    `;
}


// controller
function showTextButton() {
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
    } else if (
        curBallClass.contains("eight_ball__slider_back") ||
        curTriangleClass.contains("triangle_show")
    ) {
        curBallClass.remove("eight_ball__slider_back");
        curBallClass.add("eight_ball__slider_front");
        curTriangleClass.remove("triangle_show");
        curTriangleClass.add("triangle_hide");
    };
}
// model
const site = document.getElementById("app");
const buttons = document.getElementById("button-container");

const placeholder = "___";

let storyWords = [
                    placeholder,
                    placeholder,
                    placeholder,
                    placeholder
                 ];

const storyText = `Once, there was a ${storyWords[0]} ${storyWords[1]} that\
${storyWords[2]} in the ${storyWords[3]} - and great things happened, the end.`;

function button(text) {
    return `<button onclick="setWord(this)">${text}</button>`;
}


// view
updateView();
function updateView() {
    site.innerHTML = /*HTML*/`
        <div id="story">${storyText}</div>
        <div class="button-container">
            ${button("green")}
            ${button("red")}
            ${button("cat")}
            ${button("man")}
            ${button("stared")}
            ${button("jumped")}
            ${button("pool")}
            ${button("wall")}
        </div>
    `;
}


// controller
function setWord(word) {
}
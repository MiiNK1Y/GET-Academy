// model
let placeholder = "___";
let storyWords = [placeholder, placeholder, placeholder, placeholder];

function buttonSetWord(text) {
    return /*HTML*/ `<button onclick="setWord(this)">${text}</button>`;
}

// view ---------------------------------------------------------------------------
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div id="story">${
            `Once, there was a ${storyWords[0]} ${storyWords[1]} that ${storyWords[2]}\
            in the ${storyWords[3]} - and great things happened, the end.`
        }</div>
        <div class="button-container">
            ${buttonSetWord("green")}
            ${buttonSetWord("red")}
            ${buttonSetWord("cat")}
            ${buttonSetWord("man")}
            ${buttonSetWord("stared")}
            ${buttonSetWord("jumped")}
            ${buttonSetWord("pool")}
            ${buttonSetWord("wall")}
        </div>
    `;
}

// controller ---------------------------------------------------------------------
let curWord = 0;
function setWord(word) {
    if (curWord < storyWords.length) {
        let colored = /*HTML*/ `<span style="color: #a6e3a1">${word.innerHTML}</span>`;
        storyWords[curWord] = colored;
        curWord++;
        updateView();
    };
}

function makeCard(color, text, fontColor) {
    const location = document.getElementById("cards");

    location.innerHTML += /*HTML*/ `
    <div class="card" ${style(color, fontColor)}>${text}</div>
    `
}

function style(color, text, fontColor) {
    let thisStyle = `style="background-color: ${color}; font-color: ${fontColor}";`;

    return thisStyle;
}
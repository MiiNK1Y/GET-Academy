function homeView() {
    let html = /*HTML*/`
    <div class="home_container" style: z-index: 1;>
        <h1>Topp Katter!</h1>
        <div class="header_underline"></div>
        <div class="top-cats_container_wrapper">
            <div class="top-cats_container">
                ${topTen()}
            </div>
        </div>
    </div>
    `;

    return html;
}


function topTen() {

    const first = "🌟🌟🌟";
    const second = "⭐⭐";
    const third = "⭐";

    let topTenItemHtml = function(rating, img, name, star, id) {
        let html = /*HTML*/`
            <div class="top-ten-item_container">
                <div class="star-rating">${star ?? ""}</div>
                <div class="rating">${rating} / 10</div>
                <div class="top-cats_img-container" onclick="viewCatCard(${id})">
                    <img src="${img}/main.jpg" />
                </div>
                <div class="name">${name}</div>
            </div>
        `;

        return html;
    };

    let cats = model.data.cat;
    let sortedCats = cats.sort((a, b) => b.rating - a.rating);

    let html = "";

    for (let i = 0; i < 10; i++) {

        let star = "";

        switch (i) {
            case 0:
                star = first;
                break;
            case 1:
                star = second;
                break;
            case 2:
                star = third;
                break;
            default:
                star = "&nbsp;";
                break;
        }

        let rating = sortedCats[i].rating;
        let img = sortedCats[i].photo;
        let name = sortedCats[i].name;
        let id = sortedCats[i].id;

        html += topTenItemHtml(rating, img, name, star, id);
    }

    return html;
}

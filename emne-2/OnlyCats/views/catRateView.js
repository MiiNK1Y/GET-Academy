function catRateView(id) {
    let cat = model.data.cat.find(cat => cat.id === id);

    return /*HTML*/`
        <div class="outer_card_container floating">
            <div class="card">
                <button class="close_cat_card" onclick="closeCatCardView()">&#10005;</button>
                <div class="card_content">
                    <div class="card_main_image">
                        <img src="${cat.photo}/main.jpg" />
                    </div>
                    <div class="rating_buttons">
                        <button onclick="selectCatRating(1)">1</button>
                        <button onclick="selectCatRating(2)">2</button>
                        <button onclick="selectCatRating(3)">3</button>
                        <button onclick="selectCatRating(4)">4</button>
                        <button onclick="selectCatRating(5)">5</button>
                        <button onclick="selectCatRating(6)">6</button>
                        <button onclick="selectCatRating(7)">7</button>
                        <button onclick="selectCatRating(8)">8</button>
                        <button onclick="selectCatRating(9)">9</button>
                        <button onclick="selectCatRating(10)">10</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}


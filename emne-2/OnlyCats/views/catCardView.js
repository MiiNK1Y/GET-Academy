function catCardView(id) {
    model.app.selectedCat = id;

    if (id !== null && model.app.isRating) {
        return catRateView(id);

    } else if (id !== null) {
        model.app.selectedCat = id;
        let cat = model.data.cat.find(cat => cat.id === id);

        document.body.classList.add("modal-open");

        return `
            <div class="outer_card_container floating">
                <div class="card">
                    <button class="close_cat_card" onclick="closeCatCardView()">&#10005;</button>
                    <div class="card_content">
                        <div class="card_main_image">
                            <img src="${cat.photo}/main.jpg" />
                        </div>
                        <div class="text_container">
                            <div class="header">
                                ${cat.name}
                                <div class="rating_of">
                                    <div class="rating">
                                        ${cat.rating}
                                    </div>
                                    / 10
                                </div>
                            </div>
                            <div class="horizontal_break"></div>
                            <div class="specs">
                                <div class="birthday">
                                    <u><strong>Fødselsdato</strong></u>: ${formatBirthday(cat.birthday)}<br>
                                </div>
                                <u><strong>Kjønn</strong></u>: ${cat.gender}<br><br>
                                <u><strong>Rase</strong></u>: ${cat.race}<br>
                                <u><strong>Farge</strong></u>: ${cat.color}<br>
                                <u><strong>Pelslengde</strong></u>: ${cat.furLength}<br><br>
                                <u><strong>Litt om katten</strong></u>: ${cat.about}<br><br>
                            </div>
                            <div class="card_bottom">
                                <u><strong>Tilhører</strong></u>: <div class="owner_of" onclick="closeSearch(); fromCardShowUser(clickableUser(${cat.id}))">${ownerOf(cat.id)}</div>
                                ${demoRatingOrNot(cat)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        return "";
    }
}

function formatBirthday(bday) {
    const nbday = String(bday);
    let year = nbday.slice(0, 4);
    let month = nbday.slice(4, 6);
    let day = nbday.slice(6, 8);
    return day + "." + month + "." + year;
}

function demoRatingOrNot(cat) {
    if (model.app.demoMode || (!model.app.demoMode && model.app.currentUser !== null)) {
        return /*HTML*/`
            <button class="rate" onclick="enableRating(${cat.id})">Vurder katt</button>
        `;
    } else {
        return "";
    }
}

function clickableUser(cat) {
    for (const user of model.data.user) {
        for (const c of user.cats) {
            if (c === cat) {
                return user.id;
            }
        }
    }
}

function fromCardShowUser(user) {
    model.app.selectedCat = null;
    model.app.selectedProfile = user;
    model.app.currentPage = "profilePage";
    updateView();
}

function ownerOf(cat) {
    for (const user of model.data.user) {
        for (const c of user.cats) {
            if (c === cat) {
                return user.username;
            }
        }
    }
}

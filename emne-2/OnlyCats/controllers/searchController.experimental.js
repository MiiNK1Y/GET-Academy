// TODO:
// - set the search input in the model.
// - create a "searching?" bool in the model to to set if the result-card should show or not.
//      - when something is typed in the search-bar, the model is set to true, and false when empty.
//      - the card should only show if there is a result for the given query.
// - regex for highlighting of found data.

var input;

function analyzeInput() {
    input = String(model.input.search.toLowerCase());
    queryInput();

    model.app.isSearching = (model.input.search === "") ? true : false;
    updateView();
    document.getElementById("search").focus();
    document.getElementById("search").value = model.input.search;
}

function queryInput() {
    const birthdayResult = model.data.cat.filter(c => formatBirthday(c.birthday).includes(input));
    const ratingResult = model.data.cat.filter(c => String(c.rating).includes(input));
    const nameResult = model.data.cat.filter(c => (c.name).toLowerCase().includes(input));
    const genderResult = model.data.cat.filter(c => (c.gender).toLowerCase().includes(input));

    const combine = [...birthdayResult, ...ratingResult, ...nameResult, ...genderResult];
    const cleanup = combine.filter((obj1, i, arr) => arr.findIndex(obj2 => (obj2.id === obj1.id)) === i);

    queryResultView(cleanup);
}

function queryResultView(items) {
    let html = "";
    if (items === undefined || items.length === 0) {
        document.body.classList.remove("modal-open");
        model.data.searchResult = "";
    } else {
        document.body.classList.add("modal-open");
        for (const i of items) {
            html += /*HTML*/`
                <div class="query_item" onclick="viewCatCard(${i.id})">
                    <img src="${i.photo}/main.jpg" />
                    <span>${highlight(i.name)}</span><br>
                    <span>${highlight(formatBirthday(i.birthday))}</span><br>
                    <span>${highlight((i.gender))}</span><br>
                    <span>${highlight(String(i.rating))} / 10</span>
                </div>
            `;
        }

        model.data.searchResult = /*HTML*/`
            <div class="searching_card_wrapper">
                <div class="header">
                    <h1>Resultater</h1>
                    <button onclick="closeSearch()">x</button>
                </div>
                <div class="searching_card">${html}</div>
            </div>
        `;
    }
}

function highlight(str) {
    const nstr = String(str);
    if (input.length > 0) {
        return nstr.replace(new RegExp(input, "gi"), `<mark class="highlight">$&</mark>`);
    } else {
        document.body.classList.remove("modal-open");
        return str;
    }
}

function closeSearch() {
    document.body.classList.remove("modal-open");
    model.app.isSearching = false;
    model.input.search = "";
    model.data.searchResult = "";
    updateView();
}

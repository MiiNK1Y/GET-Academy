function catalogue() {
    function catalogueElement(img, name, id) {
        let html = /*HTML*/`
            <div class="catalogue_item" style: z-index: 1;>
                <div class="top-cats_img-container" onclick="viewCatCard(${id})">
                    <img src="${img}/main.jpg" />
                </div>
                <div class="name">${name}</div>
            </div>
        `;

        return html;
    };

    let cats;

    switch (model.app.currentCatalogueSorting) {
        case "default":
            cats = sortIdLastAdded();
            break;
        case "alphabetical":
            cats = sortNameAlphabetical();
            break;
        case "alphabeticalReverse":
            cats = sortNameAlphabeticalReverse();
            break;
        case "age":
            cats = sortAge();
            break;
        case "popularity":
            cats = sortPopularity();
            break;
        case "gender":
            cats = sortGender();
            break;
    }

    let html = "";

    for (let i = 0; i < cats.length; i++) { // limit cap the cats, wait for more cats to be added in dirs.
        const img = cats[i].photo;
        const name = cats[i].name;
        const id = cats[i].id;

        html += catalogueElement(img, name, id);
    }

    return html;
}

function viewCatalogue() {
    const html = /*HTML*/`
        <div class="catalogue-view_container">
            <div class="filter_buttons">
                Sorter etter:
                <button onclick="catalogueSortStandard()">Sist lagt til</button>
                <button onclick="catalogueSortPopular()">Mest populær</button>
                <!--<button style="opacity: 0.6" onclick="">Tilfeldig</button>-->
                <button onclick="catalogueSortAge()">Alder</button>
                <button onclick="catalogueSortGender()">Kjønn</button>
                <!--<button style="opacity: 0.6" onclick="sortColour()">Farge</button>-->
                <button onclick="catalogueSortAlphabetical()">Navn A-Å</button>
                <button onclick="catalogueSortAlphabeticalReverse()">Navn Å-A</button>
                <!--<button style="opacity: 0.6" onclick="sortBreed()">Rase</button>-->
            </div> 
            <div class="catalogue_container">
                ${catalogue()}
            </div>
        </div>
    `;

    return html;
}


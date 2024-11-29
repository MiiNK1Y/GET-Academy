function addCatView() {

    return /* HTML */ `
        <div class="outer_card_container floating">
            <div class="card">
                <div class="card_content">
                    <div class="add_image">
                        <!--<button class="main" onclick="addMainCatImage()">Trykk for å legge til bilder</button>-->
                        <!--<button class="more" onclick="addMoreCatImages()">Legg til flere bilder</button>-->
                        <input id="select_images" type="file" accept="image/png, image/jpeg" oninput="model.input.newCat.photo=this.value" />
                    </div>
                    <div class="add_text">
                        <input placeholder="Kattens navn" onchange="model.input.newCat.name=this.value" value="${model.input.newCat.name = this.value ?? ''}"/>
                        <input placeholder="Fødselsdato dd/mm/yyyy" onchange="model.input.newCat.birthday=this.value" value="${model.input.newCat.birthday = this.value ?? ''}"/>
                        <input placeholder="Kjønn" onchange="model.input.newCat.gender=this.value" value="${model.input.newCat.gender = this.value ?? ''}"/><br>
                        <input placeholder="Rase" onchange="model.input.newCat.race=this.value" value="${model.input.newCat.race = this.value ?? ''}"/>
                        <input placeholder="Farge" onchange="model.input.newCat.color=this.value" value="${model.input.newCat.color = this.value ?? ''}"/>
                        <select id="selectCatFurType" name="Pelstype" onchange="model.input.newCat.furLength=this.value" value="${model.input.newCat.furLength = this.value ?? ''}">
                            <option value="shortHair">Korthåret</option>
                            <option value="longHair">Langhåret</option>
                            <option value="hairLess">Hårløs</option>
                        </select>
                        <input placeholder="Fortell oss litt om katten din!" onchange="model.input.newCat.about=this.value" value="${model.input.newCat.about = this.value ?? ''}" /><br>
                        <button onclick="addCat()">Legg til</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function addCat() {
    const formatBirthdayToInt = (date) => {
        let newDate = "";
        for (const dat of date.split(".")) {
            newDate = dat + newDate
        }
        return Number(newDate);
    }

    model.data.cat.push({
        id: (model.data.cat).length + 1,
        name: model.input.newCat.name,
        photo: model.input.newCat.photo,
        birthday: formatBirthdayToInt(model.input.newCat.birthday),
        race: model.input.newCat.race,
        color: model.input.newCat.color,
        furLength: model.input.newCat.furLength,
        about: model.input.newCat.about,
        rating: null,
        givenRatings: [],
    })
}

/*
newCat: {
    name: null, // string
    birthday: null, // number
    gender: null, // string
    race: null, // string
    color: null, // string
    furLength: null, // list of path-strings
    about: null, // string
    photos: [String], // list of path-strings
},
*/

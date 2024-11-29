function viewProfile() {
    const userData = model.data.user.find(u => u.id === model.app.selectedProfile);
    const userPhoto = function() {
        try {
            return userData.photo;
        } catch (TypeError) {
            return "img/tmp/defaultpfp.jpg";
        }
    }

    const html = /*HTML*/`
        <div class="main-content_container">
            <div class="profile_page" style="color: white;">

                <div class="profile_photo_container"> 
                    <div class="profile_photo">
                        <img src="${userPhoto()}" />
                    </div>
                    ${buttonsIfUser(userData.id)}
                </div>

                <div class="vertical_seperator"></div>

                <div class="user_text_container">
                    <h1>@${userData.username}</h1>
                    <div class="horizontal_seperator"></div>
                    <div class="bio">
                        ${userData.about}
                    </div>
                    <div class="profile_cats">
                        @${userData.username}s katter:
                        <div class="horizontal_seperator"></div>
                        <div class="users_cats">
                            ${printUserCats()}
                        </div>
                    </div>
                </div>

                <div class="ratings_container">
                    <div class="ratings_header">
                        <h2>@${userData.username}s<br>vurderinger</h2>
                    </div>
                    <div class="ratings">
                        ${printUserRatings()}
                    </div>
                </div>
            </div>
        </div>
        ${model.app.isAddingCat ? addCatView() : ""}
    `;

    return html;
}

function buttonsIfUser(id) {
    if (id === model.app.currentUser) {
        return /*HTML*/`
            <div> <button onclick="editProfile()"> Rediger profil </button> </div>
            <div> <button onclick="addCatButton()"> Legg til ny katt </button> </div>
            <div> <button onclick="logOut()">Logg Ut </button> </div>
        `;
    } else return "";
}

function printUserCats() {
    const selectedUser = model.app.selectedProfile;
    const userData = model.data.user[selectedUser];

    let html = "";

    for (const cat of userData.cats) {
        let indexOfCat = model.data.cat.findIndex(c => c.id === cat);
        const curCat = model.data.cat[indexOfCat];
        html += /*HTML*/`
            <div class="cat">
                <img src="${curCat.photo}/main.jpg" />
                <div class="cat_text">
                    ${curCat.name}
                    <div class="horizontal_seperator"></div>
                    ${curCat.rating} / 10
                </div>
            </div>
        `;
    }

    return html;
}

function printUserRatings() {
    const selectedUser = model.app.selectedProfile;
    const cats = model.data.cat;

    let html = "";
    for (const cat of cats) {
        const index = cat.givenRatings.findIndex(id => id.userID === selectedUser)
        if (index != -1) {
            html += /*HTML*/`
                <div class="user_rated">
                    <div class="user-rated_img-container">
                        <img src="${cat.photo}/main.jpg" />
                    </div>
                    <div class="name_rating">
                        ${cat.givenRatings[index].ratingGiven} / 10 <br>
                        ${cat.name}
                    </div>
                </div>
            `;
        }
    }

    return html;
}

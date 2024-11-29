function login() {
    let user = getUserByUsername(model.input.signIn.username)
    if (user != undefined && user.password === model.input.signIn.password) {
        model.app.currentUser = user.id;
        model.app.currentPage = 'home';
        updateView();
    }
    else {
        model.app.currentError = model.app.error.wrongPassword;
        updateView();
    }
}

function getUserByUsername(username) {
    let users = model.data.user;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return users[i]
        }
    }
}

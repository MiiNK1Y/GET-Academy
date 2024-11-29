function createAndAddUser() {
    let signUp = model.input.signUp;
    let newUserId = model.data.user.length;
    let newUser = {
        id: newUserId,
        username: signUp.username,
        password: signUp.password,
        email: signUp.email,
        photo: "img/tmp/defaultpfp.jpg",
        about: "",
        cats: [],
    };
    model.data.user.push(newUser);
    model.app.currentUser = newUserId;
}


function validatePassword() {
    let signUp = model.input.signUp;

    if (signUp.password === signUp.repeatPassword) {
        return true;
    } else {
        return false;
    }
}


function validateSignUpFields() {
    let signUp = model.input.signUp;

    if (!signUp.username || !signUp.email || !signUp.password || !signUp.repeatPassword) {
        return true;
    } else {
        return false;
    }
}


function validateInput() {
    if (validateSignUpFields()) {
        model.app.currentError = model.app.error.emptyField;
        return false;
    } else if (validatePassword()) {
        return true;
    } else {
        model.app.currentError = model.app.error.passwordNotMatching;
        return false;
    }
}


function resetInputs() {
    model.input.signUp.username = "";
    model.input.signUp.email = "";
    model.input.signUp.password = "";
    model.input.signUp.repeatPassword = "";
}


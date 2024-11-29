function sortIdLastAdded() {
    return model.data.cat.sort((a, b) => a.id - b.id);
}

function sortNameAlphabetical() {
    return model.data.cat.sort((a, b) => a.name.localeCompare(b.name));
}

function sortNameAlphabeticalReverse() {
    return model.data.cat.sort((a, b) => b.name.localeCompare(a.name));
}

function sortAge() {
    return model.data.cat.sort((a, b) => a.birthday - b.birthday);
}

function sortPopularity() {
    return model.data.cat.sort((a, b) => b.rating - a.rating);
}

function sortGender() {
    return model.data.cat.sort((a, b) => b.gender.localeCompare(a.gender));
}


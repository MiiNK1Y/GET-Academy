function selectCatRating(rating) {
    if (model.app.selectedCat !== null) {
        const rate = model.app.givenRating = rating;
        const user = model.app.currentUser ?? "guest";

        for (const cat of model.data.cat) {
            if (cat.id === model.app.selectedCat) {
                cat.givenRatings.push({ userID: user, ratingGiven: rate, });
                console.log("rated cat");
            }
        }

        model.app.isRating = false;
        model.app.givenRating = null;

        setRatings();
        updateView();
    } else {
        console.log("error giving rating.")
    }
}

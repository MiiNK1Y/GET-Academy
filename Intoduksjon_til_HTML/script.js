function collapseAll() {
    document.getElementById("card__tools").style.display = "none";
    document.getElementById("card__html").style.display = "none";
    document.getElementById("card__css").style.display = "none";
    document.getElementById("card__javascript").style.display = "none";
    document.getElementById("card__game").style.display = "none";
}

function showCardInner(card) {
    collapseAll()
    document.getElementById(card).style.display = "block";
}

function changeDisplay (display) {
    document.getElementById('cards').classList.value = '';
    document.getElementById('cards').classList.add(display);
}

function gameChangeAsset (attr, part, direction){

    let this_attr = document.getElementById(attr).getAttribute("src");

    const head1 = "img/head1.png";
    const head2 = "img/head2.png";
    const head3 = "img/head3.png";
    const head4 = "img/head4.png";

    if (part == "head" && direction == "left") {
        switch (this_attr) {
            case head1:
                document.getElementById(attr).setAttribute("src", head2);
                break
            case head2:
                document.getElementById(attr).setAttribute("src", head3);
                break
            case head3:
                document.getElementById(attr).setAttribute("src", head4);
                break
            case head4:
                document.getElementById(attr).setAttribute("src", head1);
                break
        }
    };

    if (part == "head" && direction == "right") {
        switch (this_attr) {
            case head1:
                document.getElementById(attr).setAttribute("src", head4);
                break
            case head2:
                document.getElementById(attr).setAttribute("src", head1);
                break
            case head3:
                document.getElementById(attr).setAttribute("src", head2);
                break
            case head4:
                document.getElementById(attr).setAttribute("src", head3);
                break
        }
    };

    const body1 = "img/body1.png";
    const body2 = "img/body2.png";
    const body3 = "img/body3.png";
    const body4 = "img/body4.png";

    if (part == "body" && direction == "left") {
        switch (this_attr) {
            case body1:
                document.getElementById(attr).setAttribute("src", body2);
                break
            case body2:
                document.getElementById(attr).setAttribute("src", body3);
                break
            case body3:
                document.getElementById(attr).setAttribute("src", body4);
                break
            case body4:
                document.getElementById(attr).setAttribute("src", body1);
                break
        }
    };

    if (part == "body" && direction == "right") {
        switch (this_attr) {
            case body1:
                document.getElementById(attr).setAttribute("src", body4);
                break
            case body2:
                document.getElementById(attr).setAttribute("src", body1);
                break
            case body3:
                document.getElementById(attr).setAttribute("src", body2);
                break
            case body4:
                document.getElementById(attr).setAttribute("src", body3);
                break
        }
    };

    const legs1 = "img/legs1.png";
    const legs2 = "img/legs2.png";
    const legs3 = "img/legs3.png";
    const legs4 = "img/legs4.png";

    if (part == "legs" && direction == "left") {
        switch (this_attr) {
            case legs1:
                document.getElementById(attr).setAttribute("src", legs2);
                break
            case legs2:
                document.getElementById(attr).setAttribute("src", legs3);
                break
            case legs3:
                document.getElementById(attr).setAttribute("src", legs4);
                break
            case legs4:
                document.getElementById(attr).setAttribute("src", legs1);
                break
        }
    };

    if (part == "legs" && direction == "right") {
        switch (this_attr) {
            case legs1:
                document.getElementById(attr).setAttribute("src", legs4);
                break
            case legs2:
                document.getElementById(attr).setAttribute("src", legs1);
                break
            case legs3:
                document.getElementById(attr).setAttribute("src", legs2);
                break
            case legs4:
                document.getElementById(attr).setAttribute("src", legs3);
                break
        }
    }
};

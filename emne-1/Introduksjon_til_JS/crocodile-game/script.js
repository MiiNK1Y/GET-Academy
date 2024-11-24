let collected_points = 0;

// set numbers at first visit.
buttonReset();


function checkResult(char) {
    let num_top = document.getElementById("numbers__top").innerHTML;
    let num_bottom = document.getElementById("numbers__bottom").innerHTML;
    num_top = Number(num_top);
    num_bottom = Number(num_bottom);
    if (
        (char == "=" && num_top == num_bottom) ||
        (char == ">" && num_top > num_bottom)  ||
        (char == "<" && num_top < num_bottom)
    ) {
        point("+");
        buttonReset();
    } else {
        point("-");
        buttonReset();
    };
}


function giveCharError() {
    document.getElementById("error").innerHTML += /*HTML*/`
    <div>ERROR: Make sure you only use these characters:<br>= , &lt; , &gt;</div>
    `;
}


function buttonSubmit() {
    let input = document.getElementById("numbers__input");
    let char = input.value;
    if (
        (char == "=") || 
        (char == ">") ||
        (char == "<")
    ) {
        checkResult(char);
    } else {
        input.value = "";
        giveCharError();
    };
}


function genNumber() {
    let num = Math.floor(Math.random() * 11);
    if (num != 0) {
        return num;
    } else {
        return genNumber();
    };
}


function buttonReset() {
    document.getElementById("numbers__top").innerHTML = genNumber();
    document.getElementById("numbers__bottom").innerHTML = genNumber();
    document.getElementById("error").innerHTML = "";
    document.getElementById("numbers__input").value = "";
}


function colorPoint(math) {
    let points = document.getElementById("points__count");
    if (math == "+") {
        points.classList.add("points__correct");
        setTimeout(function() {
            points.classList.remove("points__correct");
        }, 1000);
    } else if (math == "-") {
        points.classList.add("points__wrong");
        setTimeout(function() {
            points.classList.remove("points__wrong");
        }, 1000);
    }
}


function point(math) {
    if (math == "+") {
        collected_points++;
        colorPoint(math);
    } else if (math == "-") {
        collected_points--;
        colorPoint(math);
    }
    document.getElementById("points__count").innerHTML = collected_points;
}


var input = document.getElementById("numbers__input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("buttons__submit").click();
    }
});
let feedCounter = 0;
let peeCounter = 0;
let entertainCounter = 0;
let cuddleCounter = 0;
let coffeeCounter = 0;
let catnipCounter = 0;
let counter = 0;

let feed;
let pee;
let entertain;
let cuddle;
let coffee;
let catnip;

function startCounter() {

    feed = setInterval(feedCounting, 300);
    pee = setInterval(peeCounting, 800);
    entertain = setInterval(entertainCounting, 400);
    cuddle = setInterval(cuddleCounting, 700);
    coffee = setInterval(coffeeCounting, 500);
    catnip = setInterval(catnipCounting, 200);
}

function feedCounting() {
    feedCounter++;
    document.getElementById("feedCounter").innerHTML = `Feed: ${feedCounter}`;
    feedMessage();
}

function giveFood() {
    feedCounter = 0;
}

function peeCounting() {
    peeCounter++;
    document.getElementById("peeCounter").innerHTML = `Pee: ${peeCounter}`;
    peeMessage();
}

function givePee() {
    peeCounter = 0;
}

function giveEntertain() {
    entertainCounter = 0;
}

function entertainCounting() {
    entertainCounter++;
    document.getElementById("entertainCounter").innerHTML = `Entertain: ${entertainCounter}`;
    entertainMessage();
}

function giveCuddle() {
    cuddleCounter = 0;
}

function cuddleCounting() {
    cuddleCounter++;
    document.getElementById("cuddleCounter").innerHTML = `Cuddle ${cuddleCounter}`;
    cuddleMessage();
}

function giveCoffee() {
    coffeeCounter = 0;
}

function coffeeCounting() {
    coffeeCounter++;
    document.getElementById("coffeeCounter").innerHTML = `Coffee ${coffeeCounter}`;
    coffeeMessage();
}

function giveCatnip() {
    catnipCounter = 0;
}

function catnipCounting() {
    catnipCounter++;
    document.getElementById("catnipCounter").innerHTML = `Catnip ${catnipCounter}`;
    catnipMessage();
}

// chat-bubble__needs-text
function feedMessage() {
    if (feedCounter == 10) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `I'm hungry:)`;
    } else if (feedCounter == 30) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `I need food now.`;
    } else if (feedCounter == 80) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `Ok dude, I need something to eat RN or I'm gonna die!!!`;
    } else if (feedCounter == 100) {
        counter = 100;
        engGameSeq();
    }
}
function entertainMessage() {
    if (entertainCounter == 10) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `Can we plz play?`;
    } else if (entertainCounter == 30) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `I really wanna play with you`;
    } else if (entertainCounter == 80) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `If we don't play right this instance,<br> I'm gonna burn down the house.`;
    } else if (entertainCounter == 100) {
        counter = 100;
        engGameSeq();
    }
}
function coffeeMessage() {
    if (coffeeCounter == 10) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `I feel a bit tired, might I have some coffee?`;
    } else if (coffeeCounter == 30) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `Yo my head really hurts,<br> I. NEED. COFFEE`;
    } else if (coffeeCounter == 80) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `Dude give me my feckin coffee or I'll barf on your floor`;
    } else if (coffeeCounter == 100) {
        counter = 100;
        engGameSeq();
    }
}

function peeMessage() {
    if (peeCounter == 10) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `I think I need the toilet`;
    } else if (peeCounter == 30) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `Okey i really need to pee`;
    } else if (peeCounter == 80) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `Seriously I'm gonna piss myself`;
    } else if (peeCounter == 100) {
        counter = 100;
        engGameSeq();
    }
}

function cuddleMessage() {
    if (cuddleCounter == 10) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `I'm feeling kinda lonely,<br> could I get a hug?`;
    } else if (cuddleCounter == 30) {
        document.getElementById("chat-bubble__needs-text").innerHTML = `Okey I'm feeling neglected`;
    } else if (cuddleCounter == 80) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `HOOMAN! ARE YOU AWARE OF MY EXISTENCE?<br> GIVE ME A DAMN HUG!`;
    } else if (cuddleCounter == 100) {
        counter = 100;
        engGameSeq();
    }
}

function catnipMessage() {
    if (catnipCounter == 10) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `Hm, you know what would be nice now? I lil somethin somethin`;
    } else if (catnipCounter == 30) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `I'm talking about that good cush. Catnip. Asap.`;
    } else if (catnipCounter == 80) {
        document.getElementById(
            "chat-bubble__needs-text"
        ).innerHTML = `You're the reason I have a crippling addiction,<br> give me my feckin catnip or I'm gonna take a shit on your pillow!!`;
    } else if (catnipCounter == 100) {
        counter = 100;
        engGameSeq();
    }
}

function startSeq() {
    document.getElementById("app").style.display = "flex";
    document.getElementById("start").style.display = "none";

    startCounter();
}

function engGameSeq() {
    // change the bubble-text
    document.getElementById("chat-bubble__needs-text").innerHTML = "Fuck you I'm <strong>LEAVING</strong>";
    document.getElementById("buttons").style.display = "none";

    // change the avar image
    const smilePath = "/avatar.png";
    const angyPath = "/avatar_angy.png";

    // 'counter' is global
    if (Number(counter == 100)) {
        document.getElementById("avatar").src = angyPath;
        stopInterval();
    } else {
        document.getElementById("avatar").src = smilePath;
    }
}

function stopInterval()
{
    clearInterval(feed)
    clearInterval(pee)
    clearInterval(entertain)
    clearInterval(cuddle)
    clearInterval(coffee)
    clearInterval(catnip)
    
}

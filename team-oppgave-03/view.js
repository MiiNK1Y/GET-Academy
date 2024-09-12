updateView()
function updateView() 
{
    html.innerHTML = /*HTML*/ `
    <div id="you-met">
    <div  class="you_met-found__text">You met:</div>
    <div id="you-met1" class="you_met-found__window"></div>
    
    </div>
    <div id="road">
        <div id="your_points">Points:&nbsp;${points}</div>
        <div id="car">
            <div id="car__front" style="border-bottom: 180px solid ${frontColor}"></div>
            <div id="car__middle">
                <div class="door-container">
                    <div id="front-left-door" class="door border door-left" style="background-color: ${frontLeftDoorColor}"></div>
                    <div id="front-right-door" class="door border door-left" style="background-color: ${frontRightDoorColor}"></div>
                </div>
                <div id="roof" style="background-color: ${roofColor}">
                    <div class="front-window"></div>
                    <div class="front-side-windows"></div>
                    <div class="back-side-windows"></div>
                    <div class="back-window"></div>
                    <div class="roof-frame"></div>
                </div>
                <div class="door-container">
                    <div id="back-left-door" class="door border door-right" style="background-color: ${backLeftDoorColor}"></div>
                    <div id="back-right-door" class="door border door-right" style="background-color: ${backRightDoorColor}"></div>
                </div>
            </div>
            <div id="car__back" style="border-top: 70px solid ${backColor}"></div>
            <div class="tyre-front-left tyre"></div>
            <div class="tyre-front-right tyre"></div>
            <div class="tyre-back-left tyre"></div>
            <div class="tyre-back-right tyre"></div>
            <br>
            <button onclick="startDriving()">wanna drive?</button>
        </div>
        <div>
            <div class="sign">100 km</div>
        </div>
    
    </div>
    <div id="you-found">
        <div  class="you_met-found__text">You found:</div>
        <div id="you-found1" class="you_met-found__window"></div>
    </div>
    `;

    console.log(points);
    winOrLoseCheck();
} 


function startDriving() 
{
    let r = Math.floor(Math.random()*100);
    if(r < 10){getRandomPerson()}
    else if(r >= 10){getRandomObject()}
}

function getRandomPerson() {
    let random = Math.floor(Math.random() * 4)
    if (random == 1) {
        document.getElementById("you-met1").innerHTML = /*html*/`
            <div>Eskil:&nbsp;</div><br>
            <div>Hva tenker du om LoC eller GM?</div><br>
            <button onclick="correctGreeting()">Det er det beste i verden</button>
            <button onclick="wrongGreeting()">Bare søppel</button>
            `;
    } else if (random == 2) {
        document.getElementById("you-met1").innerHTML = /*HTML*/ `
            <div>Rebecka:&nbsp;</div><br>
            <div>Hva gjør dere?</div>
            <button onclick="correctGreeting()">Morramøte</button>
            <button onclick="wrongGreeting()">Gaming</button>
            `;
    } else if (random == 3) {
        document.getElementById("you-met1").innerHTML = /*HTML*/`
            <div>Marie:&nbsp;</div><br>
            <div>Er det lurt å skrive logg?</div>
            <button onclick="correctGreeting()">Ja</button>
            <button onclick="wrongGreeting()">Nei</button>
            `;
    } else {getRandomPerson()};

}


function getRandomObject() {
    let random = Math.floor(Math.random() * 5);
    if (random ==1){
       document.getElementById("you-found1").innerHTML = /*HTML*/`
        <div>Sprayboks:&nbsp;</div>
        <div>Rød</div>
        <button onclick="acceptItem()">Aksepter</button>
        <button onclick=>Avslå</button>
        `;
    } else if (random ==2){
       document.getElementById("you-found1").innerHTML = /*HTML*/`
            <div>Wunderbaum:&nbsp;</div>
            <div>Grønn</div>
            <button onclick="acceptItem()">Aksepter</button>
            <button onclick="declineItem()">Avslå</button>
        `;
       
    } else if (random ==3){
       document.getElementById("you-found1").innerHTML = /*HTML*/`
            <div>Terning:&nbsp;</div>
            <div>Rosa</div>
            <button onclick="acceptItem()">Aksepter</button>
            <button onclick="declineItem()">Avslå</button>
        `;
    } else if (random ==4){
        document.getElementById("you-found1").innerHTML = /*HTML*/`
            <div>Eksos:&nbsp;</div>
            <div>Krom</div>
            <button onclick="acceptItem()">Aksepter</button>
            <button onclick="declineItem()">Avslå</button>
        `;
       
    } else {getRandomObject()};
}

function correctGreeting(){
    multiplyer = 1;
    multiplyer++
    points = points * multiplyer
    document.getElementById("you-met1").innerHTML = 
    `
    <div>Correct!</div>
    `
    startDriving()
}

function wrongGreeting(){
    multiplyer= 0.5
    points = points * multiplyer
    points = -5
    document.getElementById("you-met1").innerHTML = `
    <div>Wrong!</div>
    `;
    startDriving()
}

function acceptItem(){
    if (document.getElementById("you-found1").innerHTML.includes("Sprayboks")) 
        {
            number++
            points = points + 5
            changeColor();
            startDriving()
            console.log(number)
        } else {
            points++
            updateView()
            startDriving()
         }
}

function declineItem(){
    updateView()
    startDriving()
}

function changeColor() {
    let hardColor = 'red';
    if (frontColor != hardColor) {
        frontColor = hardColor;
        updateView()
    } else if (frontLeftDoorColor != hardColor) {
        frontLeftDoorColor = hardColor;
        updateView()
    } else if (frontRightDoorColor != hardColor) {
        frontRightDoorColor = hardColor;
        updateView()
    } else if (roofColor != hardColor) {
        roofColor = hardColor;
        updateView()
    } else if (backLeftDoorColor != hardColor) {
        backLeftDoorColor = hardColor;
        updateView()
    } else if (backRightDoorColor != hardColor) {
        backRightDoorColor = hardColor;
        updateView()
    } else if (backColor != hardColor) {
        backColor = hardColor;
        updateView()
    }
    else {winFunction()}
    
}

function winOrLoseCheck() {
    if(points >= win) {
        winFunction();
    } else if (points <= lose) {
        loseFunction();
    }
}

function winFunction() {
    html.innerHTML = /*HTML*/ `
    <div class="blink">Gratulerer,<br>du vant spillet!!</div>
    <img src="plan/snoop-dogg-dancing.gif" alt="Snoop Dogg danser fordi du vant <3">
    <button onclick="location.reload()">Spill igjen</button>
    `;
}

function loseFunction() {
    html.innerHTML = /*HTML*/ `
    <div>Lol du tapte, noob</div>
    <img src="plan/kto-kounotori.gif" alt="Du er en taper >:(">
    <button onclick="location.reload()">Spill igjen</button>
    `;

}

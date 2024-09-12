function startDriving() 
{
    let r = Math.floor(Math.random()*100);
    if(r < 10){getRandomPerson()}
    else if(r >= 10){getRandomObject()}
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

function winOrLoseCheck() {
    if(points >= win) {
        winFunction();
    } else if (points <= lose) {
        loseFunction();
    }
}
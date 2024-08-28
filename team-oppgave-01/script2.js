const potion_max = 12;

let potion_health = document.getElementById("counter__health").innerHTML;
let potion_mana = document.getElementById("counter__mana").innerHTML;
let potion_physick = document.getElementById("counter__physick").innerHTML;
let potion_marika = document.getElementById("counter__marika").innerHTML;

function checkMax() {
    if (
        potion_health + potion_mana + potion_physick + potion_marika >= 12
    ) {
        alert("you don't have that many potions");
        return false
    } else {
        return true
    }
}

function minusAllocatedPotions() {
    max_potions = document.getElementById("maxPotions").innerHTML
    if (maxPotion != 0 && checkMax()) {
        maxPotions = maxPotions--;
    }
}

function setPotionAmount(id, val) {
    if (checkMax()) {
        document.getElementById(id).innerHTML = val;
    }
    minusAllocatedPotions();
}

function addOrSubPotionAmount(potionID, addOrSub) {
    let potion = document.getElementById(potionID).innerHTML;

    if (addOrSub == '+') {
        setPotionAmount(potionID, potion++);
    } else if (addOrSub == '-') {
        setPotionAmount(potionID, potion--);
    }
}
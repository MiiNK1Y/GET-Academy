
let maxPotion = 12;
let potion1 = 0;
let potion2 = 0;
let potion3 = 0;
let potion4 = 0;
let totalPotion = potion1 + potion2 + potion3 + potion4

function warning() {
   let max_potion = document.getElementById("maxPotions").innerHTML;
   if (max_potion == 0 || max_potion > maxPotion) {
      alert("Beware!\nYou may not exceed a dozen potions, lest you yearn for a most painful end.");
   }
}

function minusMax() {
    warning();
    let max_potions = document.getElementById("maxPotions").innerHTML;
    max_potions--;
    document.getElementById("maxPotions").innerHTML = max_potions;
}

function plusMax() {
    warning();
    let max_potions = document.getElementById("maxPotions").innerHTML;
    max_potions++;
    document.getElementById("maxPotions").innerHTML = max_potions;
}

function plusHealth(){
    potion1++;
    warning();
    document.getElementById('counter__health').innerHTML = potion1;
    minusMax();
}

function minusHealth(){
    if (potion1 != 0) {
      potion1--;
      plusMax();
    };
    warning();

    document.getElementById('counter__health').innerHTML = potion1;
}

function plusMana(){
    potion2 ++;
    warning();
    document.getElementById('counter__mana').innerHTML = potion2;
    minusMax();
}

function minusMana(){
    if (potion2 != 0) {
      potion2--;
      plusMax();
    };
    warning();
    document.getElementById('counter__mana').innerHTML= potion2;
}

function plusMarika(){
    potion3++;
    warning();
    document.getElementById('counter__marika').innerHTML = potion3;
    minusMax();
}

function minusMarika(){
    if (potion3 != 0) {
        potion3--;
        plusMax();
    };
    warning();
    document.getElementById('counter__marika').innerHTML = potion3;
}

function plusPhysic(){
    potion4++;
    warning();
    document.getElementById('counter__physic').innerHTML = potion4;
    minusMax();
}

function minusPhysic(){
    if (potion4 != 0) {
        potion4--;
        plusMax();    
    }
    warning()
    document.getElementById('counter__physic').innerHTML = potion4;
}

function openInventory(){
    var v = document.getElementById("items");
     if (v.style.display === "flex") {
        v.style.display = "none";
    } else {
     v.style.display= "flex";
    }
 }



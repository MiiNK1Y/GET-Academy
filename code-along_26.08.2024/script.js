// animals

let arrAnimals = ['Hund', 'Cat', 'Esel'];

function random() {
    let num = Math.floor((Math.random()) * 10);
    
    if (num > arrAnimals.length) {
        return random();
    }
    console.log(num);
    return num;
}

function rollAnimal() {
    let rand = random();
    let my_animal = arrAnimals[rand];
    return my_animal;
}

function showAnimal() {
    let display = document.getElementById("show-animal");
    let animal = rollAnimal();
    console.log(animal);
    display.innerHTML = animal;
}
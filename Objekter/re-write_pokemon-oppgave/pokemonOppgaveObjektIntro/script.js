let pikachuName = "Pikachu";

let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "Images/drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;

// rewrite ----------------------------------------------------------
let player = {
  name: "Bjarne",
  image: "Images/pokemonTrainerIdle.png",
  pokemon: [],
};
// ------------------------------------------------------------------

//
/*
let playerName = "Bjarne";
let playerImage = "/Images/pokemonTrainerIdle.png";
let playerPokemon = [];
*/

let app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.image}">
            <div>${player.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="pokemonCollectionView()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}

function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
    <h1>Du fanget ${player.pokemon[player.pokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="pokemonCollectionView()">Vis dine pokemon</button>
          </div>
  </div>
  `;
}

// rewrite ----------------------------------------------------------
function pokemonCollectionView() {
  app.innerHTML = /*HTML*/ `
    <div id="pokemon_collection"></div>
  `;

  getPokemonFromCollection()
}

function getPokemonFromCollection() {
  let pokedex = document.getElementById("pokemon_collection");
  for (let myPokemon of player.pokemon) {
    pokedex.innerHTML += /*HTML*/ `
      <div class="show_pokemon">
        <img src="${myPokemon.image}" />
        <div>name: ${myPokemon.name}<div>
        <div>health: ${myPokemon.health}<div>
        <div>level: ${myPokemon.level}<div>
      <div>
    `;
  }
}
// ------------------------------------------------------------------

function catchPokemon() {
  player.pokemon.push(randomPokemon);
  caughtPokemonView();
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}

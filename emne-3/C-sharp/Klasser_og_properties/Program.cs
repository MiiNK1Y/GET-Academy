using Klasser_og_properties;

var Pokemons = new Pokemon[]
{
    new Pokemon("Pikachu", "Lightning", 100, 11),
    new Pokemon("Gardevoir", "Grass", 100, 5)
};

foreach (var pokemon in Pokemons)
{
    pokemon.Info();
}

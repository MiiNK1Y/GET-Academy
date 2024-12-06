namespace Klasser_og_properties
{
    public class Pokemon
    {
        public string Type { get; private set; }
        public string Name { get; private set; }
        public int Health { get; private set; }
        public int Weight { get; private set; }

        public Pokemon(string name, string type, int health, int weight)
        {
            Name = name;
            Type = type;
            Health = health;
            Weight = weight;
        }

        public void Info()
        {
            Console.WriteLine($"\nName: {Name}\nType: {Type}\nHealth: {Health}\nWeighth: {Weight}");
        }
    }
}

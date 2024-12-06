namespace code_along_05._12._2024;

class Horse
{
    public int _speed { get; private set; }
    public string _name { get; private set; } = string.Empty;
    public string _owner { get; private set; } = string.Empty;
    public int _distance_ran;

    public Horse(int speed, string name, string owner)
    {
        _speed = speed;
        _name = name;
        _owner = owner;
    }

    public void MatHest()
    {
        Console.WriteLine($"{_name} has been fed");
    }

    public void StellHest()
    {
        Console.WriteLine($"{_name} has been groomed (non sexually)");
    }

    public void LeggTilHestelop()
    {
    }
}

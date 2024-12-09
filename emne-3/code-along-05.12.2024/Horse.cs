namespace code_along_05._12._2024;

internal class Horse
{
    public string _name { get; private set; } = string.Empty;
    public string _owner { get; private set; } = string.Empty;
    public int _speed { get; private set; }
    public int _distanceRan;

    internal Horse(int speed, string name, string owner)
    {
        _speed = speed;
        _name = name;
        _owner = owner;
    }

    internal void FeedHorse()
    {
        Console.WriteLine($"{_name} has been fed");
    }

    internal void GroomHorse()
    {
        Console.WriteLine($"{_name} has been groomed (non sexually)");
    }
}

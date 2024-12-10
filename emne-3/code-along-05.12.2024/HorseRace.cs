namespace code_along_05._12._2024;

internal class HorseRace
{
    public List<Horse> Horses = new List<Horse>();
    public int _distanceKm { get; private set; }
    public Horse _winner { get; private set; }
    public Horse _looser { get; private set; }


    internal HorseRace(int distanceKm)
    {
        _distanceKm = distanceKm;
        _winner = new Horse(); // place holder
        _looser = new Horse(100, "none", "none", 999999); // place holder
        AddRandomHorses(5);
    }


    // Add a bunch of random horses to the race.
    private void AddRandomHorses(int amount)
    {
        string[] names = new string[10]
        {
            "Blinky",
            "Dash",
            "Cookie",
            "Cake",
            "Muffin",
            "CrackAddict",
            "Alimony",
            "Noteeth",
            "Hotdog",
            "Lollypop"
        };

        Random rand = new Random();

        while (Horses.Count < amount)
        {
            string name = names[rand.Next(names.Length)];
            var match = Horses.FirstOrDefault(horse => horse._name.Contains(name));
            if (match == null)
            {
                Horse horse = new Horse(rand.Next(51), name, "random");
                AddToRace(horse);
            }
        }
    }


    internal void AddToRace(Horse horse)
    {
        Horses.Add(horse);
    }


    internal void StartRace()
    {
        for (int i = 0; i < _distanceKm; i++)
        {
            UI.MenuTitle(ASCII.RaceOngoing);

            foreach (Horse h in Horses)
            {
                if (h._distanceRan >= _distanceKm)
                {
                    _winner = h;
                    return;
                }
                else
                {
                    _looser = h._distanceRan < _looser._distanceRan ? h : _looser;
                    h._distanceRan += h._speed;
                    Console.WriteLine($"{h._name} => {h._distanceRan} Km");
                }
            }

            Thread.Sleep(100);
        }
    }
}

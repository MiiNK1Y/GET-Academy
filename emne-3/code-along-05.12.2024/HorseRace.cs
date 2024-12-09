namespace code_along_05._12._2024;

internal class HorseRace
{
    public List<Horse> Horses = new List<Horse>();
    private int _distanceKm;

    internal HorseRace(int distanceKm)
    {
        _distanceKm = distanceKm;
        AddRandomHorses(5);
    }

    // Add a bunch of random horses to the race.
    internal void AddRandomHorses(int amount)
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

        for (int i = 0; i < amount; i++)
        {
            Horse horse = new Horse(rand.Next(51), names[rand.Next(names.Length)], "random");
            AddToRace(horse);
        }
    }

    internal void AddToRace(Horse horse)
    {
        Horses.Add(horse);
    }

    internal Horse StartRace()
    {
        for (int km = 0; km < _distanceKm; km++)
        {
            var horse = Horses[km];
            horse._distanceRan += horse._speed * km;
        }

        Horse winner = Horses[0]; // hold this value until it is overwritten.

        foreach (Horse horse in Horses)
        {
            if (horse._distanceRan > winner._distanceRan)
            {
                winner = horse;
            }
        }

        return winner;
    }
}

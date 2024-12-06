namespace code_along_05._12._2024;

internal class HorseRace
{
    public List<Horse> _horses = new List<Horse>();
    private int _distanceKm;

    public HorseRace(int distanceKm)
    {
        _distanceKm = distanceKm;
    }

    public void Race(Horse horse)
    {
        _horses.Add(horse);
    }

    public Hest StartLop()
    {
        for (int km = 0; km < _distanceKm; km++)
        {
            var horse = _horses[km];
            horse._distance_ran += horse._hastighet * km;
        }

        int bestDist = 0;
        Hest winner = _horses[0];

        foreach (Hest hest in _horses)
        {
            if (hest._distance_ran > bestDist)
            {
                bestDist = hest._distance_ran;
                winner = hest;
            }
        }

        return winner;
    }
}

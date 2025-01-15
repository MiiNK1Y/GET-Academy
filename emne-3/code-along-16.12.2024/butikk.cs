namespace code_along_16._12._2024;

public class Butikk
{
    public int _open { get; private set; }

    public Butikk(int tid)
    {
        _open = tid;
    }

    public string Salg(int kunde_alder)
    {
        if (_open <= 20)
        {
            int alders_grense_for_alkohol_uten_id = 25;
            int alders_grense_for_alkohol_med_id = 18;

            if (kunde_alder >= alders_grense_for_alkohol_uten_id) { return "kan kjope alkohol"; }
            else if (kunde_alder >= alders_grense_for_alkohol_med_id) { return "kan kjope alkohol etter aa ha vist id"; }
            else if (kunde_alder < alders_grense_for_alkohol_med_id) { return "kan IKKE kjope alkohol"; }
            else { return "..."; }
        }
        else { return "Det er etter 20, kunden kan ikke kjope alkohol"; }
    }
}

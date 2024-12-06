namespace Studentadministrasjonssystem;

internal class Fag
{
    public int _fagkode { get; private set; }
    public string _fagnavn { get; private set; } = string.Empty;
    public int _antallStudiepoeng { get; private set; }

    public Fag(int fagkode, string fagnavn, int antallStudiepoeng)
    {
        _fagkode = fagkode;
        _fagnavn = fagnavn;
        _antallStudiepoeng = antallStudiepoeng;
    }

    public void SkrivUtInfo()
    {
        Console.WriteLine(
            $"Fagnavn: {_fagnavn}\n" +
            $"Fagkode: {_fagkode}\n" +
            $"Studiepoeng: {_antallStudiepoeng}\n" +
            "---------------------------------"
        );
    }
}

namespace code_along_16._12._2024;

public class Kunde
{
    public int _alder { get; private set; }
    public string _name { get; private set; }

    public Kunde(int alder, string name)
    {
        _alder = alder;
        _name = name;
    }
}

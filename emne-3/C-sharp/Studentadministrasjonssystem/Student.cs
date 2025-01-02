namespace Studentadministrasjonssystem;

internal class Student
{
    public string _navn { get; private set; } = string.Empty;
    public int _alder { get; private set; }
    public int _studentId { get; private set; }
    public float _gjennomsnittskarakter { get; private set; }
    public List<Fag> _fag { get; private set; }

    public Student(string navn, List<Fag> fag, int alder, int studentId)
    {
        _navn = navn;
        _alder = alder;
        _studentId = studentId;
        _fag = fag;
    }

    public void SkrivUtInfo()
    {
        Console.WriteLine(
            $"Navn: {_navn}\n" +
            $"Alder: {_alder}\n" +
            $"Student_id: {_studentId}\n" +
            $"Studieprogram: {_fag}\n" +
            "---------------------------------"
        );
    }

    public void setGjennomsnittskarakter(Karakter[] karakterer)
    {
        int karakterSum = 0;

        foreach (var karakter in karakterer)
        {
            karakterSum += karakter._karakter;
        }

        _gjennomsnittskarakter = karakterSum / karakterer.Length;
    }
}

namespace Studentadministrasjonssystem;

internal class Student
{
    public string _navn { get; private set; } = string.Empty;
    public string _studieprogram { get; private set; } = string.Empty;
    public int _alder { get; private set; }
    public int _studentId { get; private set; }

    public Student(string navn, string studieprogram, int alder, int studentId)
    {
        _navn = navn;
        _studieprogram = studieprogram;
        _alder = alder;
        _studentId = studentId;
    }

    public void SkrivUtInfo()
    {
        Console.WriteLine(
            $"Navn: {_navn}\n" +
            $"Alder: {_alder}\n" +
            $"Student_id: {_studentId}\n" +
            $"Studieprogram: {_studieprogram}\n" +
            "---------------------------------"
        );
    }
}

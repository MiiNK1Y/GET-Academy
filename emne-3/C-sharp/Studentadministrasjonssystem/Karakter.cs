namespace Studentadministrasjonssystem;

internal class Karakter
{
    public Student _student { get; private set; }
    public Fag _fag { get; private set; }
    public int _karakter { get; private set; }

    public Karakter(Student student, Fag fag, int karakter)
    {
        _student = student;
        _fag = fag;
        _karakter = karakter;
    }

    public void SkrivUtInfo()
    {
        Console.WriteLine(
            $"Student: {_student._navn}\n" +
            $"Fag: {_fag._fagnavn}\n" +
            $"Karakter: {_karakter}\n" +
            "---------------------------------"
        );
    }
}

namespace Studentadministrasjonssystem;

internal class Program
{
    static void Main(string[] args)
    {
        Fabrikk fabrikk = new Fabrikk();
        fabrikk.Run();

        // Del 3: skriv ut karakterinformasjon:
        foreach (var karakter in fabrikk.student1Karakter)
        {
            karakter.SkrivUtInfo();
        }

        Console.WriteLine($"Gjennomsnitt: {fabrikk.student1._gjennomsnittskarakter}\n");

        foreach (var karakter in fabrikk.student2Karakter)
        {
            karakter.SkrivUtInfo();
        }

        Console.WriteLine($"Gjennomsnitt: {fabrikk.student2._gjennomsnittskarakter}\n");
    }
}

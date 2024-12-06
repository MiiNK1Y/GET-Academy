namespace Studentadministrasjonssystem;

internal static class Fabrikk
{
    public static void Run()
    {
        Student student1 = new Student("Miguel", "Liberal-arts", 33, 0);
        Student student2 = new Student("Geir", "Landbruksmekanikk", 99, 1);
        Console.WriteLine("\n------------STUDENTER------------");
        student1.SkrivUtInfo();
        student2.SkrivUtInfo();

        Fag fag1 = new Fag(0, "Liberal-arts", 1);
        Fag fag2 = new Fag(1, "Landbruksmekanikk", 99);
        Console.WriteLine("\n---------------FAG---------------");
        fag1.SkrivUtInfo();
        fag2.SkrivUtInfo();

        Karakter student1Karakter = new Karakter(student1, fag1, 6);
        Karakter student2Karakter = new Karakter(student2, fag2, 6);
        Console.WriteLine("\n------------KARAKTERER-----------");
        student1Karakter.SkrivUtInfo();
        student2Karakter.SkrivUtInfo();
    }
}

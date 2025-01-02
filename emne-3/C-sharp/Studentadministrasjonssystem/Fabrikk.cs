namespace Studentadministrasjonssystem;

internal class Fabrikk
{
    public Karakter[] student1Karakter { get; private set; }
    public Karakter[] student2Karakter { get; private set; }
    public Student student1 { get; private set; }
    public Student student2 { get; private set; }

    public void Run()
    {
        List<Fag> alleFag = new List<Fag>
        {
            new Fag(
                fagkode: 0,
                fagnavn: "Liberal-arts",
                antallStudiepoeng: 1),

            new Fag(
                fagkode: 1,
                fagnavn: "Landbruksmekanikk",
                antallStudiepoeng: 99),

            new Fag(
                fagkode: 2,
                fagnavn: "IKT-Servicefag",
                antallStudiepoeng: 99),

            new Fag(
                fagkode: 3,
                fagnavn: "TiP",
                antallStudiepoeng: 99)
        };

        student1 = new Student
            (
                navn: "Miguel",
                alder: 33,
                studentId: 0,
                fag: [
                    alleFag.Find(f => f._fagnavn == "Liberal-arts"),
                    alleFag.Find(f => f._fagnavn == "TiP")
                ]
            );

        student2 = new Student
            (
                navn: "Geir",
                alder: 99,
                studentId: 1,
                fag: [
                    alleFag.Find(f => f._fagnavn == "Landbruksmekanikk"),
                    alleFag.Find(f => f._fagnavn == "IKT-Servicefag"),
                ]
            );

        student1Karakter = new Karakter[]{
            new Karakter(
                student: student1,
                fag: alleFag[0], // Liberal-arts
                6
            ),

            new Karakter(
                student: student1,
                fag: alleFag[3], // TiP
                2
            ),
        };

        student2Karakter = new Karakter[]{
            new Karakter(
                student: student2,
                fag: alleFag[1], // Landbruksmekanikk
                6
            ),

            new Karakter(
                student: student2,
                fag: alleFag[2], // IKT-Servicefag
                6
            ),
        };

        student1.setGjennomsnittskarakter(student1Karakter);
        student2.setGjennomsnittskarakter(student2Karakter);
    }
}

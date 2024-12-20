namespace Studentadministrasjonssystem;

internal static class Fabrikk
{
    public static void Run()
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

        Student student1 = new Student
            (
                navn: "Miguel",
                alder: 33,
                studentId: 0,
                fag: [
                    alleFag.Find(f => f._fagnavn == "Liberal-arts"),
                    alleFag.Find(f => f._fagnavn == "TiP")
                ]
            );

        Student student2 = new Student
            (
                navn: "Geir",
                alder: 99,
                studentId: 1,
                fag: [
                    alleFag.Find(f => f._fagnavn == "Landbruksmekanikk"),
                    alleFag.Find(f => f._fagnavn == "IKT-Servicefag"),
                ]
            );

        Karakter student1Karakter = new Karakter(
                student1,
                fagLiberalArts,
                6);

        Karakter student2Karakter = new Karakter(
                student2,
                fagLandbruksMekanikk,
                6);

        List<Karakter> karakterer = new List<Karakter>
        {
            student1Karakter,
            student2Karakter
        };
    }
}

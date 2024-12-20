//Du skal lage en consoleapp som simulerer et butikksalg.
//Noen kunder kommer inn i butikken og skal kjøpe øl. En Kassa ansatt er nødt til å sjekke om kunden kan kjøpe på lovlig vis.
//Med fokus på objektorientering, lag en løsning på dette som simulerer 4 ulike kunder og prosessen med sjekk av legitimasjon i kassen.
//
//Regler for alkoholsalg:
//
//Det er ikke lov å kjøpe alkohol etter kl 20, dersom kunden ser eldre ut enn 25 kan de kjøpe uansett.
//Dersom de ser yngre ut enn 25 må de fremvise gyldig legitimasjon som viser at de er over 18 år

namespace code_along_16._12._2024;


class Program
{
    static void Main(string[] args)
    {
        Butikk butikk1 = new Butikk(21);
        Butikk butikk2 = new Butikk(15);

        // kunder
        List<Kunde> kunder = new List<Kunde>
        {
            new Kunde(19, "Jorgen"),
            new Kunde(10, "Pol"),
            new Kunde(49, "Sander"),
            new Kunde(25, "Axel"),
        };

        foreach (var kunde in kunder)
        {
            Console.WriteLine($"kundens navn: {kunde._name}");
            Console.WriteLine($"kundens alder: {kunde._alder}");
            Console.WriteLine($"{butikk2.Salg(kunde._alder)}");
            Console.WriteLine("============================");
        }
    }
}

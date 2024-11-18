namespace Loops;

class Program
{
    static void Main(string[] args)
    {
        // oppgave 1
        //for (int i = 0; i < 5; i++)
        //{
        //    Console.WriteLine($"It's Wednesday my dudes ({i})");
        //}

        // oppgave 2
        //string wednesday = "My dudes";
        //foreach (var c in wednesday)
        //{
        //    Console.WriteLine(c);
        //}

        // oppgave 3
        int round = 1;
        while (round < 10)
        {
            Console.WriteLine($"Runde nr: {round}");
            round++;
        }
    }
}

namespace oppgave_1;

internal class Program
{
    static void Main(string[] args)
    {
        // del av oppgave 1 i "sterk typing og verdityper"
        //int intNum = 5;
        //long longNum = 9_223_372_036_854_775_000;
        //float floatNum = 1.5f;
        //decimal decimalNum = 1.5m;
        //double doubeNum = 4.0432592093258d;
        //string stringString = "this string";
        //char charChar = 'a';
        //bool boolBool = true;

        Console.Write("Hei, hva heter du?: ");
        var input = Console.ReadLine();
        Console.WriteLine($"Velkommen {input}.");

        // oppgave 2 i "sterk typing og verdityper"
        int a = 5;
        int b = 5;
        int sum = a + b;
        Console.WriteLine($"{a} + {b} = {sum}");


        // oppgave 1 i "variabeltilordning"
        int sumOf(int num1, int num2)
        {
            return num1 + num2;
        }

        int num1 = 5;
        int num2 = 10;
        Console.WriteLine($"sum of {num1} and {num2} = {sumOf(num1, num2)}");

        void none()
        {
            Console.WriteLine("Denne metoden returnerer ingenting");
        }

        none();
    }
}

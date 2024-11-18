namespace Krokodillespillet;

class Program
{
    static void Main(string[] args)
    {
        bool gameRunnig = true;
        int points = 0;

        while (gameRunnig)
        {
            // create new pair of random numbers
            Random rand = new Random();
            int num1 = rand.Next(0, 11);
            int num2 = rand.Next(0, 11);

            // print the current point at the top of the interface
            Console.WriteLine($"points: {points}\n");
            Console.WriteLine($"{num1} _ {num2}\n");
            Console.Write("Your answer: ");

            var answer = Console.ReadLine();

            switch (answer)
            {
                case ">":
                    points = (num1 > num2) ? points + 1 : points - 1;
                    break;
                case "<":
                    points = (num1 < num2) ? points + 1 : points - 1;
                    break;
                case "=":
                    points = (num1 == num2) ? points + 1 : points - 1;
                    break;
                default:
                    gameRunnig = false;
                    break;
            }

            // default built-in console-cleaner
            //Console.Clear();

            // but imma use my own to avoid clearing out my path-bar
            cleanConsole();
        }
    }

    static void cleanConsole()
    {
        Console.SetCursorPosition(0, Console.CursorTop - 5);

        for (int i = 5; i > 0; i--)
        {
            // blank spaces to remove overflowing characters
            Console.WriteLine("                    ");
        }

        Console.SetCursorPosition(0, Console.CursorTop - 5);
    }
}

namespace Gjett_tallet
{
    internal class Game
    {

        private static bool gameRunning = true;
        private static bool guessIsCorrect;

        public static void Run()
        {
            Random rand = new Random();

            // the game loop
            while (gameRunning)
            {
                int num = rand.Next(0, 101);

                Console.WriteLine("A number between 1 and 100 has been generated\n");
                Console.WriteLine($"({num})");

                guessIsCorrect = false;
                while (!guessIsCorrect)
                {
                    Console.Write("Your guess: ");
                    string guess = Console.ReadLine() ?? "";
                    int guessNum = 0;

                    try
                    {
                        guessNum = Int32.Parse(guess);
                    }
                    // if the input is anything but a number.
                    catch (FormatException)
                    {
                        CleanConsole(1);
                        Console.WriteLine("Invalid input, try agin...");
                        Thread.Sleep(1000);
                        CleanConsole(1);
                        continue;
                    }

                    if (guessNum == num)
                    {
                        guessIsCorrect = true;
                        Console.Write("\nCorrect!\n\nWant to play again? [Y/n]: ");
                        var input = Console.ReadLine();

                        if (input == "y" || input == "")
                        {
                            CleanConsole(8);
                            continue;
                        }
                        else
                        {
                            gameRunning = false;
                            Console.Clear();
                            continue;
                        }
                    }
                    else if (guessNum > num)
                    {
                        Console.WriteLine("You need to go lower!");
                        Thread.Sleep(1000);
                        CleanConsole(2);
                        continue;
                    }
                    else if (guessNum < num)
                    {
                        Console.WriteLine("You need to go higher!");
                        Thread.Sleep(1000);
                        CleanConsole(2);
                        continue;
                    }
                    else
                    {
                        Console.WriteLine("what the fuck?\nthis should not happen...");
                        Thread.Sleep(2000);
                        return;
                    }
                }
            }
        }

        internal static void CleanConsole(int LineHeight)
        {
            Console.SetCursorPosition(0, Console.CursorTop - LineHeight);

            for (int i = LineHeight; i > 0; i--)
            {
                // blank spaces to remove overflowing characters
                Console.WriteLine("                                        "); // 30 blank characters
            }

            Console.SetCursorPosition(0, Console.CursorTop - LineHeight);
        }
    }
}

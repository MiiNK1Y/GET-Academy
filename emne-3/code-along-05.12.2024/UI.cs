namespace code_along_05._12._2024;

internal static class UI
{
    private static void MenuMaker(int option)
    {
        Console.Clear();
        Console.ResetColor();
        Console.Write(ASCII.Title);

        switch (option)
        {
            case 1:
                Console.BackgroundColor = ConsoleColor.Green;
                Console.ForegroundColor = ConsoleColor.Black;
                Console.WriteLine(ASCII.MenuOption1, Console.BackgroundColor, Console.ForegroundColor);
                Console.ResetColor();
                Console.WriteLine(ASCII.MenuOption2);
                break;

            case 2:
                Console.WriteLine(ASCII.MenuOption1);
                Console.BackgroundColor = ConsoleColor.Green;
                Console.ForegroundColor = ConsoleColor.Black;
                Console.WriteLine(ASCII.MenuOption2, Console.BackgroundColor, Console.ForegroundColor);
                Console.ResetColor();
                break;
        }
    }

    public static void Menu()
    {
        Console.CursorVisible = false;

        int selectedMenuOption = 1;

        while (true)
        {
            MenuMaker(selectedMenuOption);

            var option = Console.ReadKey(false).Key;
            switch (option)
            {
                case ConsoleKey.Q:
                    Console.CursorVisible = true;
                    return;

                case ConsoleKey.UpArrow:
                    if (selectedMenuOption == 2)
                    {
                        selectedMenuOption = 1;
                        MenuMaker(selectedMenuOption);
                    }
                    break;

                case ConsoleKey.DownArrow:
                    if (selectedMenuOption == 1)
                    {
                        selectedMenuOption = 2;
                        MenuMaker(selectedMenuOption);
                    }
                    break;

                case ConsoleKey.Enter:
                    // do this if selectedMenuOption is blahblah
                    // do this if selectedMenuOption is blahblah
                    break;

                default:
                    Console.Clear();
                    Console.Write(ASCII.Title);
                    Console.WriteLine(ASCII.InvalidInput);
                    Thread.Sleep(500);
                    break;
            }
        }
    }
}

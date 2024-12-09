namespace code_along_05._12._2024;

internal static class UI
{
    private static void FreshMenu()
    {
        Console.Clear();
        Console.WriteLine(ASCII.Title);
    }


    private static void InvalidInput()
    {
        FreshMenu();
        Console.WriteLine(ASCII.InvalidInput);
        Thread.Sleep(500);
    }


    private static void ColorMenuItem(string menuText)
    {
        Console.BackgroundColor = ConsoleColor.Green;
        Console.ForegroundColor = ConsoleColor.Black;
        Console.WriteLine(menuText, Console.BackgroundColor, Console.ForegroundColor);
        Console.ResetColor();
    }


    private static void MenuMaker(int option)
    {
        Console.CursorVisible = false;
        FreshMenu();

        switch (option)
        {
            case 1:
                ColorMenuItem(ASCII.MenuOption1);
                Console.WriteLine(ASCII.MenuOption2);
                Console.WriteLine(ASCII.MenuOption3);
                break;

            case 2:
                Console.WriteLine(ASCII.MenuOption1);
                ColorMenuItem(ASCII.MenuOption2);
                Console.WriteLine(ASCII.MenuOption3);
                break;

            case 3:
                Console.WriteLine(ASCII.MenuOption1);
                Console.WriteLine(ASCII.MenuOption2);
                ColorMenuItem(ASCII.MenuOption3);
                break;
        }
    }


    private static void ShowYourHorses()
    {
        if (Stall.myHorses.Count > 0)
        {
            FreshMenu();

            Console.WriteLine(ASCII.YourHorses);
            Console.WriteLine(ASCII.Divider);
            foreach (var horse in Stall.myHorses)
            {
                Console.WriteLine(
                    $"Name: {horse._name}\n" +
                    $"Speed: {horse._speed}\n" +
                    "===-------------------------===");
            }
        }
        else
        {
            FreshMenu();
            Console.WriteLine(ASCII.YourHorses);
            Console.WriteLine(ASCII.Divider);
            Console.WriteLine(ASCII.YouHaveNoHorses);
        }

        ColorMenuItem(ASCII.MenuGoBack);

        var input = Console.ReadKey(false).Key; // returns to menu on keypress
    }


    private static void HorseMaker()
    {
        Console.CursorVisible = true;

        FreshMenu();
        Console.WriteLine(ASCII.HorseCreator);
        Console.WriteLine(ASCII.Divider);
        Console.Write("Name your horse:\n~> ");
        var name = Console.ReadLine() ?? string.Empty;
        int speed = 0; // holing temp value

        while (true)
        {
            FreshMenu();
            Console.WriteLine(ASCII.HorseCreator);
            Console.WriteLine(ASCII.Divider);
            Console.Write($"How fast does {name} run?\n(KMph) ~> ");

            try
            {
                speed = Convert.ToInt32(Console.ReadLine());
            }
            catch (FormatException)
            {
                InvalidInput();
                continue;
            }
            break;
        }

        Stall.myHorses.Add(new Horse(speed, name, "me"));
    }


    private static Horse ChooseYourHorse()
    {
        Console.CursorVisible = false;

        int selectedHorse = 0;
        var horses = Stall.myHorses;

        while (true)
        {
            FreshMenu();
            Console.WriteLine(ASCII.RaceMaker);
            Console.WriteLine(ASCII.Divider);
            Console.WriteLine(ASCII.SelectHorse);
            Console.WriteLine(ASCII.Divider);

            for (int horse = 0; horse < horses.Count; horse++)
            {
                string option = $"{horses[horse]._name} [{horses[horse]._speed}KMph]";
                if (horse == selectedHorse)
                {
                    ColorMenuItem(">" + option);
                }
                else
                {
                    Console.WriteLine(option);
                }
            }

            var input = Console.ReadKey(false).Key;

            switch (input)
            {
                case ConsoleKey.DownArrow:
                    if (selectedHorse < (horses.Count - 1))
                    {
                        selectedHorse++;
                    }
                    break;

                case ConsoleKey.UpArrow:
                    if (selectedHorse > 0)
                    {
                        selectedHorse--;
                    }
                    break;

                case ConsoleKey.Enter:
                    return Stall.myHorses[selectedHorse];
            }
        }
    }


    private static void RaceRunner(HorseRace race)
    {
        race.StartRace();
        while (true)
        {
            FreshMenu();
            Console.WriteLine(ASCII.RaceOngoing);
            Console.WriteLine(ASCII.Divider);

            foreach (var horse in race.Horses)
            {
                Console.WriteLine($"{horse._name} has ran: {horse._distanceRan}");
            }

            Thread.Sleep(100);
        }
    }


    private static void RaceMaker()
    {


        FreshMenu();
        Console.WriteLine(ASCII.RaceMaker);
        Console.WriteLine(ASCII.Divider);

        if (Stall.myHorses.Count == 0)
        {
            Console.WriteLine(ASCII.YouHaveNoHorses);
            ColorMenuItem(ASCII.MenuGoBack);
            var input = Console.ReadKey(false).Key; // returns to menu on keypress
            return;
        }

        var length = 0;

        Console.CursorVisible = true;

        while (true)
        {
            FreshMenu();
            Console.WriteLine(ASCII.RaceMaker);
            Console.WriteLine(ASCII.Divider);
            Console.Write("How long should the race be?\n(KMph) ~> ");

            try
            {
                length = Convert.ToInt32(Console.ReadLine());
            }
            catch (FormatException)
            {
                InvalidInput();
                continue;
            }
            break;
        }


        HorseRace race = new HorseRace(length);
        race.AddToRace(ChooseYourHorse());
        RaceRunner(race);
    }


    public static void Menu()
    {
        int selectedMenuOption = 1;

        while (true)
        {

            MenuMaker(selectedMenuOption);

            var option = Console.ReadKey(false).Key;
            switch (option)
            {
                case ConsoleKey.Q:
                    Console.Clear();
                    Console.CursorVisible = true;
                    return;

                case ConsoleKey.DownArrow:
                    if (selectedMenuOption == 1) { selectedMenuOption = 2; MenuMaker(selectedMenuOption); }
                    else if (selectedMenuOption == 2) { selectedMenuOption = 3; MenuMaker(selectedMenuOption); }
                    break;

                case ConsoleKey.UpArrow:
                    if (selectedMenuOption == 2) { selectedMenuOption = 1; MenuMaker(selectedMenuOption); }
                    else if (selectedMenuOption == 3) { selectedMenuOption = 2; MenuMaker(selectedMenuOption); }
                    break;

                case ConsoleKey.Enter:
                    if (selectedMenuOption == 1) { ShowYourHorses(); }
                    else if (selectedMenuOption == 2) { HorseMaker(); }
                    else if (selectedMenuOption == 3) { RaceMaker(); }
                    break;

                default:
                    InvalidInput();
                    break;
            }
        }
    }
}

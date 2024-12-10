namespace code_along_05._12._2024;

internal static class UI
{
    // clear the screen and rewrite the title
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


    internal static void MenuTitle(string menuTitle)
    {
        if (menuTitle == string.Empty) { FreshMenu(); }
        else
        {
            FreshMenu();
            Console.WriteLine(menuTitle);
            Console.WriteLine(ASCII.Divider);
        }
    }


    private static void ColorMenuItem(string menuText)
    {
        Console.BackgroundColor = ConsoleColor.Green;
        Console.ForegroundColor = ConsoleColor.Black;
        Console.WriteLine(menuText, Console.BackgroundColor, Console.ForegroundColor);
        Console.ResetColor();
    }


    private static void ColorLooser(string menuText)
    {
        Console.BackgroundColor = ConsoleColor.Red;
        Console.ForegroundColor = ConsoleColor.Black;
        Console.WriteLine(menuText, Console.BackgroundColor, Console.ForegroundColor);
        Console.ResetColor();
    }


    private static void ShowYourHorses()
    {
        MenuTitle(ASCII.YourHorses);

        if (Stall.myHorses.Count > 0)
        {
            foreach (var horse in Stall.myHorses)
            {
                Console.WriteLine(
                    $"Name: {horse._name}\n" +
                    $"Speed: {horse._speed}\n" +
                    "===-------------------------===");
            }
        }
        else { Console.WriteLine(ASCII.YouHaveNoHorses); }

        ColorMenuItem(ASCII.MenuGoBack);
        var input = Console.ReadKey(false).Key; // returns to menu on keypress
    }


    private static void HorseMaker()
    {
        Console.CursorVisible = true;
        MenuTitle(ASCII.HorseCreator);
        Console.Write("Name your horse:\n~> ");
        var name = Console.ReadLine() ?? string.Empty;
        int speed = 0; // holing temp value

        while (true)
        {
            MenuTitle(ASCII.HorseCreator);
            Console.Write($"How fast does {name} run?\n(KMph) ~> ");

            try { speed = Convert.ToInt32(Console.ReadLine()); }
            catch (FormatException)
            {
                InvalidInput();
                continue;
            }
            break;
        }

        Stall.myHorses.Add(new Horse(speed, name, "me"));
    }


    private static void ResetMyHorses()
    {
        foreach (Horse h in Stall.myHorses) { h._distanceRan = 0; }
    }


    private static void RaceResults(HorseRace horses)
    {
        MenuTitle(ASCII.RaceResults);
        Console.WriteLine("");
        Console.WriteLine(CenterString("+ WINNER +", 31));
        ColorMenuItem(CenterString(horses._winner._name, 31));
        Console.WriteLine("");
        Console.WriteLine(CenterString("x Future lasagna x", 31));
        ColorLooser(CenterString(horses._looser._name, 31));
        Console.WriteLine("");
        ColorMenuItem(ASCII.MenuGoBack);
        var input = Console.ReadKey(false).Key;
        ResetMyHorses();
    }


    private static Horse ChooseYourHorse(string header)
    {
        Console.CursorVisible = false;
        List<string> options = new List<string>();
        foreach (var horse in Stall.myHorses) { options.Add($"{horse._name} [{horse._speed}KMph]"); }
        string title = $"{header}\n{ASCII.SelectHorse}";
        int selectedHorse = MenuMaker(options, title, 31);
        return Stall.myHorses[selectedHorse];
    }


    private static void RaceMaker()
    {
        if (Stall.myHorses.Count == 0)
        {
            MenuTitle(ASCII.RaceMaker);
            Console.WriteLine(ASCII.YouHaveNoHorses);
            ColorMenuItem(ASCII.MenuGoBack);
            var input = Console.ReadKey(false).Key;
            return;
        }

        var length = 0;
        Console.CursorVisible = true;

        while (true)
        {
            MenuTitle(ASCII.RaceMaker);
            Console.Write("How long should the race be?\n(KMph) ~> ");

            try { length = Convert.ToInt32(Console.ReadLine()); }
            catch (FormatException)
            {
                InvalidInput();
                continue;
            }

            break;
        }

        HorseRace race = new HorseRace(length);
        race.AddToRace(ChooseYourHorse(ASCII.RaceMaker));
        race.StartRace();
        RaceResults(race);
    }


    private static string CenterString(string option, int menuWidth)
    {
        int flankSpace = (menuWidth - option.Length) / 2;
        string flank = "";
        for (int i = 0; i < flankSpace; i++) { flank += " "; }
        string newOption = flank + option + flank;
        if (newOption.Length == menuWidth) { return newOption; }
        else { return newOption + " "; }
    }


    // returns the integer of the selected option in a given list.
    private static int MenuMaker(List<string> options, string menuTitle, int menuWidth)
    {
        List<string> CenteredOptions = new List<string>();

        // recreate the option strings with an evened width.
        foreach (string option in options) { CenteredOptions.Add(CenterString(option, menuWidth)); }

        Console.CursorVisible = false;

        int selectedOption = 0;
        while (true)
        {
            MenuTitle(menuTitle);

            for (int option = 0; option < CenteredOptions.Count; option++)
            {
                if (option == selectedOption) { ColorMenuItem(CenteredOptions[option]); }
                else { Console.WriteLine(CenteredOptions[option]); }
            }

            var input = Console.ReadKey(false).Key;
            switch (input)
            {
                case ConsoleKey.DownArrow:
                    if (selectedOption < (CenteredOptions.Count - 1)) { selectedOption++; }
                    break;
                case ConsoleKey.UpArrow:
                    if (selectedOption > 0) { selectedOption--; }
                    break;
                case ConsoleKey.Enter:
                    return selectedOption;
                case ConsoleKey.Q:
                    return 404;
            }
        }
    }


    public static void FeedYourHorses()
    {
        if (Stall.myHorses.Count == 0)
        {
            MenuTitle(ASCII.FeedYourHorses);
            Console.WriteLine(ASCII.YouHaveNoHorses);
            ColorMenuItem(ASCII.MenuGoBack);
            var input = Console.ReadKey(false).Key;
            return;
        }
        Horse h = ChooseYourHorse(ASCII.FeedYourHorses);

        MenuTitle(ASCII.FeedYourHorses);
        Console.WriteLine(CenterString($"{h._name} has been fed!", 31));
        Thread.Sleep(1000);
    }


    public static void GroomYouHorses()
    {
        if (Stall.myHorses.Count == 0)
        {
            MenuTitle(ASCII.GroomYourHorses);
            Console.WriteLine(ASCII.YouHaveNoHorses);
            ColorMenuItem(ASCII.MenuGoBack);
            var input = Console.ReadKey(false).Key;
            return;
        }
        Horse h = ChooseYourHorse(ASCII.GroomYourHorses);

        MenuTitle(ASCII.GroomYourHorses);
        Console.WriteLine(CenterString($"{h._name} has been groomed!", 31));
        Thread.Sleep(1000);
    }


    public static void Menu()
    {
        List<string> options = new List<string>
        {
            "[1] Show your horses",
            "[2] Feed your horses",
            "[3] Groom your horses",
            "[4] Make a horse",
            "[5] Start a race",
            "[Q] Exit"
        };

        while (true)
        {
            switch (MenuMaker(options, string.Empty, 31))
            {
                case 0:
                    ShowYourHorses();
                    break;
                case 1:
                    FeedYourHorses();
                    break;
                case 2:
                    GroomYouHorses();
                    break;
                case 3:
                    HorseMaker();
                    break;
                case 4:
                    RaceMaker();
                    break;
                case 5:
                    Console.Clear();
                    Console.CursorVisible = true;
                    return;
                case 404:
                    Console.Clear();
                    Console.CursorVisible = true;
                    return;
            }
        }
    }
}

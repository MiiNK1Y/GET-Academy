// See https://aka.ms/new-console-template for more information


string day = "";

void run()
{
    Console.Write("Give a number: ");
    var input = Console.ReadLine();
    switch (input)
    {
        case "1":
            day = "Monday";
            break;
        case "2":
            day = "Tuesday";
            break;
        case "3":
            day = "Wednesday";
            break;
        case "4":
            day = "Thursday";
            break;
        case "5":
            day = "Friday";
            break;
        case "6":
            day = "Saturday";
            break;
        case "7":
            day = "Sunday";
            break;
        default:
            run();
            break;
    }

}

run();
Console.WriteLine($"It's {day}, my dudes.");

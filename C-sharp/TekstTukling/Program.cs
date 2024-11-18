namespace TekstTukling;

class Program
{
    private static string user_input = "";
    private static string user_input_modified = "";

    static void Main(string[] args)
    {

        Console.Write("[1] RotateText\n[2] Change word\n\nSelect option: ");
        var user_select = Console.ReadLine();

        cleanConsole();

        switch (user_select)
        {
            case "1":
                setUserString();
                rotateText();
                Console.WriteLine($"Input rotated:\n{user_input_modified}");
                break;
            case "2":
                setUserString();
                replaceChar();
                Console.WriteLine($"Input where 'e' is replaced by 'a':\n{user_input_modified}");
                break;
            default:
                Console.WriteLine("Invalid input...");
                return;
        }
    }

    static void setUserString()
    {
        Console.Write("Write your string: ");
        var input = Console.ReadLine();
        user_input = (input != null) ? input.ToString() : "";
    }

    static void rotateText()
    {
        string new_string = "";
        foreach (var c in user_input)
        {
            new_string = c + new_string;
        }
        user_input_modified = new_string;
    }

    static void replaceChar()
    {
        string new_string = "";
        foreach (var c in user_input)
        {
            new_string += (c == 'e') ? 'a' : c;
        }
        user_input_modified = new_string;
    }

    static void cleanConsole()
    {
        int interfaceHeight = 4;
        Console.SetCursorPosition(0, Console.CursorTop - interfaceHeight);
        for (int i = interfaceHeight; i > 0; i--)
        {
            Console.WriteLine("                              "); // 30 blank chars
        }
        Console.SetCursorPosition(0, Console.CursorTop - interfaceHeight);
    }
}

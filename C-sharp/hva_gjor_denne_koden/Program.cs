namespace hva_gjor_denne_koden;

class Program
{
    static void Main(string[] args)
    {
        var range = 250;
        var counts = new int[range];
        int sum = 0;                                        // mine
        string text = "something";
        while (!string.IsNullOrWhiteSpace(text))
        {
            //text = Console.ReadLine();                    // original
            text = Console.ReadLine().ToLower();            // mine
            foreach (var character in text ?? string.Empty)
            {
                counts[(int)character]++;
                sum++;                                      // mine
            }
            for (var i = 0; i < range; i++)
            {
                if (counts[i] > 0)
                {
                    var character = (char)i;
                    float percentage = ((float)counts[(int)character]) / sum * 100; // mine
                    //Console.WriteLine(character + " - " + counts[i]);             // original
                    Console.WriteLine($"{character} - {percentage}%");              // mine
                }
            }
        }
    }
}

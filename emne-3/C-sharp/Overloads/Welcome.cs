namespace Overloads
{
    public class Welcome
    {
        public void PrintWelcomeMessage(string name = "Du er snill!")
        {
            Console.WriteLine($"Hei og velkommen {name}");
        }

        //public void PrintWelcomeMessage()
        //{
        //    Console.WriteLine($"Hei og velkommen");
        //}
    }
}

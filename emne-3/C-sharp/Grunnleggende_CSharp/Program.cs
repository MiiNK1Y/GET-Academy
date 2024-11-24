namespace Grunnleggende_CSharp;

class Program
{
    static void Main(string[] args)
    {
        bool isThirty(int num1, int num2)
        {
            if (num1 == 30 || num2 == 30 || num1 + num2 == 30)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        Console.WriteLine(isThirty(30, 1));
    }
}

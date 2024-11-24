// See https://aka.ms/new-console-template for more information

Random rand = new Random();

string[] hobbies = ["camping", "skating", "fisking", "programmering", "sykling"];

Console.Write("Who shall receive a hobby?: ");
var hobbyTaker = Console.ReadLine();

string pickedHobby = hobbies[rand.Next(0, hobbies.Count())];

Console.Write($"{hobbyTaker} gets hobby: {pickedHobby}");


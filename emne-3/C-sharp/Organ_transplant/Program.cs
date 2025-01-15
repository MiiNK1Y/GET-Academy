namespace Organ_transplant;

class Program
{
    static void Main(string[] args)
    {
        var person1 = new Person(bloodtype: "A"); // has faulty kidney removed
        var person2 = new Person(bloodtype: "A"); // giving kidney

        var person1FaultyKidney = person1.PopOrgan();
        var person2HealtyKidney = person2.PopOrgan();

        person1.InsertKidney(person2HealtyKidney);
    }
}

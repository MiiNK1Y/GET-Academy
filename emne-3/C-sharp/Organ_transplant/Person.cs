namespace Organ_transplant;

class Person
{
    List<Kidney> _kidneySpot = new List<Kidney>();

    public Person(string bloodtype)
    {
        _kidneySpot.Add(new Kidney(bloodtype));
    }

    public Kidney PopOrgan()
    {
        Kidney removed_kidney = _kidneySpot[0];
        _kidneySpot.Clear();
        return removed_kidney;
    }

    public void InsertKidney(Kidney kidney)
    {
        _kidneySpot.Add(kidney);
    }
}

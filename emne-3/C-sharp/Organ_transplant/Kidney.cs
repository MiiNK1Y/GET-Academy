namespace Organ_transplant;

class Kidney
{
    public string BloodType { get; private set; }

    public Kidney(string bloodType)
    {
        BloodType = bloodType;
    }
}

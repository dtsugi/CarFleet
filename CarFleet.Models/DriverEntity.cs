namespace CarFleet.Models
{
    public class DriverEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int IdCompany { get; set; }
        public string PersonalId { get; set; }
        public string Image { get; set; }
        public string PhoneNumber { get; set; }
    }
}

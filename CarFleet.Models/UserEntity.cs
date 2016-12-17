using System;

namespace CarFleet.Models
{
    public class UserEntity
    {
        public int Id { get; set; }
        public int Id_usertype { get; set; }
        public int Id_company { get; set; }
        public int Id_language { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public DateTime Sign_in_date { get; set; }
        public DateTime Expiration_date { get; set; }
        public string Events_email_address { get; set; }
        public string Gcm_registration_id { get; set; }
        public string Gcm_registration_device { get; set; }
        public string Surname { get; set; }
        public string Validation_code { get; set; }
        public bool User_validated { get; set; }

    }
}



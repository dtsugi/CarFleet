using System;

namespace CarFleet.Models
{
    public class CompanyEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Id_companytype { get; set; }
        public int Id_company { get; set; }
        public string Cif { get; set; }
        public string Address { get; set; }
        public string Phone_number { get; set; }
        public string Fax_number { get; set; }
        public string Email_address { get; set; }
        public DateTime? Registry_date_time { get; set; }
        public string Map_address { get; set; }
        public string Events_email_address { get; set; }
        public int Id_drivingrulesconfiguration { get; set; }
        public int Id_platform_service { get; set; }

    }
}



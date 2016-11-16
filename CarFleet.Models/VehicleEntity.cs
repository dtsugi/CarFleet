using System;

namespace CarFleet.Models
{
    public class VehicleEntity
    {

        public int Id { get; set; }
        public int Id_company { get; set; }
        public int Id_fleet { get; set; }
        public int Id_vehicletype { get; set; }
        public int Id_driver { get; set; }
        public string Name { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Plate { get; set; }
        public float Odometer { get; set; }
        public string Image { get; set; }
        public string Color { get; set; }
        public string Chassis_number { get; set; }
        public string Factory_color { get; set; }
        public DateTime Registry_date_time { get; set; }
        public DateTime Installation_date_time { get; set; }

    }
}



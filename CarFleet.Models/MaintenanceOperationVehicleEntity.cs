
using System;

namespace CarFleet.Models
{
    public class MaintenanceOperationVehicleEntity
    {

        public int Id { get; set; }
        public int Id_vehicle { get; set; }
        public int Id_maintenanceoperation { get; set; }
        public int Distance_notification { get; set; }
        public int Time_notification { get; set; }
        public int Current_distance { get; set; }
        public DateTime Starting_time { get; set; }
        public bool Maintenance_performed { get; set; }
        public DateTime Performing_time { get; set; }
        public bool Notification_sent { get; set; }

    }
}



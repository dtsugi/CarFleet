using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class MaintenanceOperationVehicleLogic
    {
        private MaintenanceOperationVehicleCrud _MaintenanceOperationVehicleCrud = new MaintenanceOperationVehicleCrud();

        public List<MaintenanceOperationVehicleEntity> Get(int? id, int? idVehicle, int? idMaintenanceOperation)
        {
            return _MaintenanceOperationVehicleCrud.Select(id, idVehicle, idMaintenanceOperation);
        }
    }
}

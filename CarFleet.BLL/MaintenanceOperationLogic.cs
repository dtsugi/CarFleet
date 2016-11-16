using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class MaintenanceOperationLogic
    {
        private MaintenanceOperationCrud _MaintenanceOperationCrud = new MaintenanceOperationCrud();

        public MaintenanceOperationEntity GetById(int? id)
        {
            return _MaintenanceOperationCrud.Select(id);
        }
    }
}

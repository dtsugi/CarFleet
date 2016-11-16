using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class MaintenanceOperationCompanyLogic
    {
        private MaintenanceOperationCompanyCrud _MaintenanceOperationCompanyCrud = new MaintenanceOperationCompanyCrud();

        public List<MaintenanceOperationCompanyEntity> GetById(int? id, int? idCompany, int? idMaintenanceOperation)
        {
            return _MaintenanceOperationCompanyCrud.Select(id, idCompany, idMaintenanceOperation);
        }
    }
}

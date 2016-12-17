using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class VehicleLogic
    {
        private VehicleCrud _VehicleCrud = new VehicleCrud();

        public List<VehicleEntity> GetByCompanyId(int idCompany)
        {
            return _VehicleCrud.SelectByCompanyId(idCompany);
        }

        public List<VehicleEntity> GetByFleetId(int idFleet)
        {
            return _VehicleCrud.SelectByFleetId(idFleet);
        }
    }
}

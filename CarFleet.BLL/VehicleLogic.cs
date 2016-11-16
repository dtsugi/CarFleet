using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class VehicleLogic
    {
        private VehicleCrud _VehicleCrud = new VehicleCrud();

        public List<VehicleEntity> Get(int? id, int? idCompany, int? idFleet, int? idVehicleType, int? idDriver)
        {
            return _VehicleCrud.Select(id, idCompany, idFleet, idVehicleType, idDriver);
        }
    }
}

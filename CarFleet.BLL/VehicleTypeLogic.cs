using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class VehicleTypeLogic
    {
        private VehicleTypeCrud _VehicleTypeCrud = new VehicleTypeCrud();

        public List<VehicleTypeEntity> Get(int? id)
        {
            return _VehicleTypeCrud.Select(id);
        }
    }
}

using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class FleetLogic
    {
        private FleetCrud _FleetCrud = new FleetCrud();

        public List<FleetEntity> GetById(int? id, int? idCompany)
        {
            return _FleetCrud.Select(id, idCompany);
        }
    }
}

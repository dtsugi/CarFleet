using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class FleetLogic
    {
        private FleetCrud _FleetCrud = new FleetCrud();

        public List<FleetEntity> GetByCompanyId(int idCompany)
        {
            List<FleetEntity> listFleet = _FleetCrud.SelectByCompanyId(idCompany);
            if (listFleet != null)
            {
                FunctionsLogic functionsLogic = new FunctionsLogic();
                foreach (FleetEntity entity in listFleet)
                {
                    entity.TotalVehicle = functionsLogic.GetTotalVehicleByCompanyAndFleetId(entity.Id_company, entity.Id);
                }
            }
            return listFleet;
        }
    }
}

using CarFleet.DAL;
using CarFleet.Models;
using System.Collections.Generic;

namespace CarFleet.BLL
{
    public class FunctionsLogic
    {
        private FunctionsCrud _FunctionsCrud = new FunctionsCrud();

        public int GetTotalsByCompanyId(int idCompany, CarFleet.Utils.Constants.CARFLEET_ENTITY CARFLEET_ENTITY)
        {
            FunctionsEntity entity = _FunctionsCrud.TotalsByCompany(idCompany, CARFLEET_ENTITY);
            if (entity != null)
            {
                object value;
                int total = 0;
                if (Utils.Utilities._IsCasteable(entity.result.ToString(), out value, Utils.Constants.DATA_TYPES.INT))
                {
                    total = int.Parse(entity.result.ToString());
                }
                return total;
            }
            else { return 0; }
        }

        public int GetTotalVehicleByCompanyAndFleetId(int idCompany, int idFleet)
        {
            FunctionsEntity entity = _FunctionsCrud.TotalVehicleByCompanyAndFleetId(idCompany, idFleet);
            if (entity != null)
            {
                object value;
                int total = 0;
                if (Utils.Utilities._IsCasteable(entity.result.ToString(), out value, Utils.Constants.DATA_TYPES.INT))
                {
                    total = int.Parse(entity.result.ToString());
                }
                return total;
            }
            else { return 0; }
        }
    }
}

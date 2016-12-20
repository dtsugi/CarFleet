using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;

namespace CarFleet.DAL
{
    public class FunctionsCrud : CrudEntityBase<FunctionsEntity>
    {
        public override void Map(IDataRecord record, FunctionsEntity entity)
        {
            if (base.HasValueRecord(record, "result")) { entity.result = base.GetValueRecord(record["result"], Utils.Constants.DATA_TYPES.VARCHAR); }
        }


        public FunctionsEntity TotalsByCompany(int companyId, CarFleet.Utils.Constants.CARFLEET_ENTITY CARFLEET_ENTITY)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_COMPANY_OUT", SqlDbType.Int, companyId);
                switch (CARFLEET_ENTITY)
                {
                    case Utils.Constants.CARFLEET_ENTITY.DRIVER:
                        command.CommandText = StoreProcedureConstants.stp_DriverTotalByCompanyId;
                        break;
                    case Utils.Constants.CARFLEET_ENTITY.FLEET:
                        command.CommandText = StoreProcedureConstants.stp_FleetTotalByCompanyId;
                        break;
                    case Utils.Constants.CARFLEET_ENTITY.VEHICLE:
                        command.CommandText = StoreProcedureConstants.stp_VehicleTotalByCompanyId;
                        break;
                }
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }

        public FunctionsEntity TotalVehicleByCompanyAndFleetId(int idCompany, int idFleet)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_COMPANY_OUT", SqlDbType.Int, idCompany);
                command.AddParameter("ID_FLEET_OUT", SqlDbType.Int, idFleet);
                command.CommandText = StoreProcedureConstants.stp_VehicleTotalByCompanyAndFleetId;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }
    }
}

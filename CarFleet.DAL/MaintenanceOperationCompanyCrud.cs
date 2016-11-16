

using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;

namespace CarFleet.DAL
{
    public class MaintenanceOperationCompanyCrud : CrudEntityBase<MaintenanceOperationCompanyEntity>
    {
        public override void Map(IDataRecord record, MaintenanceOperationCompanyEntity entity)
        {

            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["id_company"])) { entity.Id_company = (int)base.GetValueRecord(record["id_company"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["id_maintenanceoperation"])) { entity.Id_maintenanceoperation = (int)base.GetValueRecord(record["id_maintenanceoperation"], Utils.Constants.DATA_TYPES.INT); }

        }

        public List<MaintenanceOperationCompanyEntity> Select(int? id, int? idCompany, int? idMaintenanceOperation)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.AddParameter("ID_COMPANY_OUT", SqlDbType.Int, idCompany);
                command.AddParameter("ID_MAINTENANCEOPERATION_OUT", SqlDbType.Int, idMaintenanceOperation);
                command.CommandText = "stp_MaintenanceOperation_CompanySelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




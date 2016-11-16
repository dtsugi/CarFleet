using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;

namespace CarFleet.DAL
{
    public class MaintenanceOperationCrud : CrudEntityBase<MaintenanceOperationEntity>
    {
        public override void Map(IDataRecord record, MaintenanceOperationEntity entity)
        {

            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["name"])) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }

        }

        public MaintenanceOperationEntity Select(int? id)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.CommandText = "stp_MaintenanceOperationSelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }
    }
}




using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;

namespace CarFleet.DAL
{
    public class VehicleTypeCrud : CrudEntityBase<VehicleTypeEntity>
    {
        public override void Map(IDataRecord record, VehicleTypeEntity entity)
        {
            //entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            //if (base.HasValueRecord(record["name"])) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            //if (base.HasValueRecord(record["image"])) { entity.Image = (string)base.GetValueRecord(record["image"], Utils.Constants.DATA_TYPES.NVARCHAR); }
        }

        public List<VehicleTypeEntity> Select(int? id)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.CommandText = "stp_VehicleTypeSelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




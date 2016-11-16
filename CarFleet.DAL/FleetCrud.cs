
using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;

namespace CarFleet.DAL
{
    public class FleetCrud : CrudEntityBase<FleetEntity>
    {
        public override void Map(IDataRecord record, FleetEntity entity)
        {

            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            entity.Id_company = (int)base.GetValueRecord(record["id_company"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["name"])) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["image"])) { entity.Image = (string)base.GetValueRecord(record["image"], Utils.Constants.DATA_TYPES.NVARCHAR); }

        }

        public List<FleetEntity> Select(int? id, int? idCompany)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.AddParameter("ID_COMPANY_OUT", SqlDbType.Int, idCompany);
                command.CommandText = "stp_FleetSelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




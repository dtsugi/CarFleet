using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;

namespace CarFleet.DAL
{
    public class UserFleetCrud : CrudEntityBase<UserFleetEntity>
    {
        public override void Map(IDataRecord record, UserFleetEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_user")) { entity.Id_user = (int)base.GetValueRecord(record["id_user"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_fleet")) { entity.Id_fleet = (int)base.GetValueRecord(record["id_fleet"], Utils.Constants.DATA_TYPES.INT); }
        }

        public List<UserFleetEntity> SelectByUserId(int idUser)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_USER_OUT", SqlDbType.Int, idUser);
                command.CommandText = StoreProcedureConstants.stp_UserFleetSelectByUserId;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




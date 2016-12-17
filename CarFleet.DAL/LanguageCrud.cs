using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;

namespace CarFleet.DAL
{
    public class LanguageCrud : CrudEntityBase<LanguageEntity>
    {
        public override void Map(IDataRecord record, LanguageEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "hashkey")) { entity.Hashkey = (string)base.GetValueRecord(record["hashkey"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "name")) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
        }

        public LanguageEntity SelectById(int id)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.CommandText = StoreProcedureConstants.stp_LanguageSelect;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }

        public List<LanguageEntity> SelectAll()
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, null);
                command.CommandText = StoreProcedureConstants.stp_LanguageSelect;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




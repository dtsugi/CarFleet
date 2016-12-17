using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;
using System;

namespace CarFleet.DAL
{
    public class ConfigTagCrud : CrudEntityBase<ConfigTagEntity>
    {
        public override void Map(IDataRecord record, ConfigTagEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "tag_key")) { entity.Tag_key = (string)base.GetValueRecord(record["tag_key"], Utils.Constants.DATA_TYPES.VARCHAR); }
            if (base.HasValueRecord(record, "page_name")) { entity.Page_name = (string)base.GetValueRecord(record["page_name"], Utils.Constants.DATA_TYPES.VARCHAR); }
        }

        public List<ConfigTagEntity> SelectAll()
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, null);
                command.CommandText = StoreProcedureConstants.stp_ConfigTagSelect;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }

        public ConfigTagEntity SelectById(int id)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.CommandText = StoreProcedureConstants.stp_ConfigTagSelect;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }

        public void Insert(ConfigTagEntity entity)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("TAG_KEY_OUT", SqlDbType.VarChar, entity.Tag_key);
                command.AddParameter("PAGE_NAME_OUT", SqlDbType.VarChar, entity.Page_name);
                command.CommandText = StoreProcedureConstants.stp_ConfigTagInsert;
                command.CommandType = CommandType.StoredProcedure;
                var id = command.ExecuteScalar();
                entity.Id = int.Parse(id.ToString());
            }
        }
    }
}




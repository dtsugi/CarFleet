using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;
using System;

namespace CarFleet.DAL
{
    public class ConfigTagLanguageCrud : CrudEntityBase<ConfigTagLanguageEntity>
    {
        public override void Map(IDataRecord record, ConfigTagLanguageEntity entity)
        {
            if (base.HasValueRecord(record, "id_configTag")) { entity.Id_configTag = (int)base.GetValueRecord(record["id_configTag"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_language")) { entity.Id_language = (int)base.GetValueRecord(record["id_language"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "value_tag")) { entity.Value_tag = (string)base.GetValueRecord(record["value_tag"], Utils.Constants.DATA_TYPES.VARCHAR); }

            if (base.HasValueRecord(record, "tag_key")) { entity.Tag_key = (string)base.GetValueRecord(record["tag_key"], Utils.Constants.DATA_TYPES.VARCHAR); }
        }

        public List<ConfigTagLanguageEntity> SelectByLanguage(int languageId)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_LANGUAGE_OUT", SqlDbType.Int, languageId);
                command.CommandText = StoreProcedureConstants.stp_ConfigTagLanguageSelectByLanguage;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }

        public List<ConfigTagLanguageEntity> SelectByPageName(string pageName)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("PAGE_NAME_OUT", SqlDbType.VarChar, pageName);
                command.CommandText = StoreProcedureConstants.stp_SelectConfigTagLanguageByPageName;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }

        public void Insert(ConfigTagLanguageEntity entity)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_CONFIG_TAG_OUT", SqlDbType.Int, entity.Id_configTag);
                command.AddParameter("ID_LANGUAGE_OUT", SqlDbType.Int, entity.Id_language);
                command.AddParameter("VALUE_TAG_OUT", SqlDbType.VarChar, entity.Value_tag);
                command.CommandText = StoreProcedureConstants.stp_ConfigTagLanguageInsert;
                command.CommandType = CommandType.StoredProcedure;
                command.ExecuteScalar();
            }
        }

        public void Update(ConfigTagLanguageEntity entity)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_CONFIG_TAG_OUT", SqlDbType.Int, entity.Id_configTag);
                command.AddParameter("ID_LANGUAGE_OUT", SqlDbType.Int, entity.Id_language);
                command.AddParameter("VALUE_TAG_OUT", SqlDbType.VarChar, entity.Value_tag);
                command.CommandText = StoreProcedureConstants.stp_ConfigTagLanguageUpdate;
                command.CommandType = CommandType.StoredProcedure;
                command.ExecuteScalar();
            }
        }

    }
}




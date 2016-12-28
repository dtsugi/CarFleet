using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;
using System;

namespace CarFleet.DAL
{
    public class UserCrud : CrudEntityBase<UserEntity>
    {
        public override void Map(IDataRecord record, UserEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_usertype")) { entity.Id_usertype = (int)base.GetValueRecord(record["id_usertype"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_company")) { entity.Id_company = (int)base.GetValueRecord(record["id_company"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_language")) { entity.Id_language = (int)base.GetValueRecord(record["id_language"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "name")) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "login")) { entity.Login = (string)base.GetValueRecord(record["login"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "password")) { entity.Password = (string)base.GetValueRecord(record["password"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "sign_in_date")) { entity.Sign_in_date = (DateTime)base.GetValueRecord(record["sign_in_date"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record, "expiration_date")) { entity.Expiration_date = (DateTime)base.GetValueRecord(record["expiration_date"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record, "events_email_address")) { entity.Events_email_address = (string)base.GetValueRecord(record["events_email_address"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "gcm_registration_id")) { entity.Gcm_registration_id = (string)base.GetValueRecord(record["gcm_registration_id"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "gcm_registration_device")) { entity.Gcm_registration_device = (string)base.GetValueRecord(record["gcm_registration_device"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "surname")) { entity.Surname = (string)base.GetValueRecord(record["surname"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "validation_code")) { entity.Validation_code = (string)base.GetValueRecord(record["validation_code"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "user_validated")) { entity.User_validated = (bool)base.GetValueRecord(record["user_validated"], Utils.Constants.DATA_TYPES.BIT); }
        }

        public UserEntity Login(string loginName, string password)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("LOGIN_OUT", SqlDbType.NVarChar, loginName);
                command.AddParameter("PASSWORD_OUT", SqlDbType.NVarChar, password);
                command.CommandText = StoreProcedureConstants.stp_UserLogin;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }

        public void UpdateLanguage(int idUser, int idLanguage)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, idUser);
                command.AddParameter("ID_LANGUAGE_OUT", SqlDbType.Int, idLanguage);
                command.CommandText = StoreProcedureConstants.stp_UserUpdateLanguage;
                command.CommandType = CommandType.StoredProcedure;
                command.ExecuteNonQuery();
            }
        }

        public UserEntity SelectByLoginName(string loginName)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("LOGIN_OUT", SqlDbType.NVarChar, loginName);
                command.CommandText = StoreProcedureConstants.stp_UserSelectByLogin;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }

        public bool UpdatePassword(int idUser, string password)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, idUser);
                command.AddParameter("PASSWORD_OUT", SqlDbType.NVarChar, password);
                command.CommandText = StoreProcedureConstants.stp_UserUpdatePassword;
                command.CommandType = CommandType.StoredProcedure;
                int rowsAffected = command.ExecuteNonQuery();
                return (rowsAffected > 0 ? true : false);
            }
        }
    }
}




using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;
using System;

namespace CarFleet.DAL
{
    public class UserRestoreCrud : CrudEntityBase<UserRestoreEntity>
    {
        public override void Map(IDataRecord record, UserRestoreEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (Int64)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.BIGINT); }
            if (base.HasValueRecord(record, "id_user")) { entity.IdUser = (int)base.GetValueRecord(record["id_user"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "code")) { entity.Code = (string)base.GetValueRecord(record["code"], Utils.Constants.DATA_TYPES.VARCHAR); }
            if (base.HasValueRecord(record, "created_date")) { entity.CreatedDate = (DateTime)base.GetValueRecord(record["created_date"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record, "expiration_date")) { entity.ExpirationDate = (DateTime)base.GetValueRecord(record["expiration_date"], Utils.Constants.DATA_TYPES.DATETIME); }
        }

        public bool Insert(UserRestoreEntity entity)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_USER_OUT", SqlDbType.Int, entity.IdUser);
                command.AddParameter("CODE_OUT", SqlDbType.VarChar, entity.Code);
                command.AddParameter("CREATED_DATE_OUT", SqlDbType.DateTime, entity.CreatedDate);
                command.AddParameter("EXPIRATION_DATE_OUT", SqlDbType.DateTime, entity.ExpirationDate);
                command.CommandText = StoreProcedureConstants.stp_UserRestoreInsert;
                command.CommandType = CommandType.StoredProcedure;
                object idObj = command.ExecuteScalar();
                object idOut;
                return Utils.Utilities._IsCasteable(idObj.ToString(), out idOut, Utils.Constants.DATA_TYPES.BIGINT);
            }
        }

        public UserRestoreEntity SelectByUserIdCode(int idUser,string code)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_USER_OUT", SqlDbType.Int, idUser);
                command.AddParameter("CODE_OUT", SqlDbType.VarChar, code);
                command.CommandText = StoreProcedureConstants.stp_UserRestoreSelectByUserCode;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }
    }
}




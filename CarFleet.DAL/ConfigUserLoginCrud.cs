using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using CarFleet.Utils.Database;
using System;

namespace CarFleet.DAL
{
    public class ConfigUserLoginCrud : CrudEntityBase<ConfigUserLoginEntity>
    {
        public override void Map(IDataRecord record, ConfigUserLoginEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (Int64)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.BIGINT); }
            if (base.HasValueRecord(record, "id_user")) { entity.IdUser = (int)base.GetValueRecord(record["id_user"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "token")) { entity.Token = (string)base.GetValueRecord(record["token"], Utils.Constants.DATA_TYPES.VARCHAR); }
            if (base.HasValueRecord(record, "device_uuid")) { entity.DeviceUUID = (string)base.GetValueRecord(record["device_uuid"], Utils.Constants.DATA_TYPES.VARCHAR); }
            if (base.HasValueRecord(record, "timestamp")) { entity.Timestamp = (DateTime)base.GetValueRecord(record["timestamp"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record, "expiration_timestamp")) { entity.ExpirationTimestamp = (DateTime)base.GetValueRecord(record["expiration_timestamp"], Utils.Constants.DATA_TYPES.DATETIME); }
        }

        public bool Insert(ConfigUserLoginEntity entity)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_USER_OUT", SqlDbType.Int, entity.IdUser);
                command.AddParameter("TOKEN_OUT", SqlDbType.VarChar, entity.Token);
                command.AddParameter("DEVICE_UUID_OUT", SqlDbType.VarChar, entity.DeviceUUID);
                command.AddParameter("TIMESTAMP_OUT", SqlDbType.DateTime, entity.Timestamp);
                command.AddParameter("EXPIRATION_DATETIME_OUT", SqlDbType.DateTime, entity.ExpirationTimestamp);
                command.CommandText = StoreProcedureConstants.stp_ConfigUserLoginInsert;
                command.CommandType = CommandType.StoredProcedure;
                object idObj = command.ExecuteScalar();
                object idOut;
                return Utils.Utilities._IsCasteable(idObj.ToString(), out idOut, Utils.Constants.DATA_TYPES.BIGINT);
            }
        }

        public ConfigUserLoginEntity SelectByUserTokenUUID(int idUser, string token, string deviceUUID)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_USER_OUT", SqlDbType.Int, idUser);
                command.AddParameter("TOKEN_OUT", SqlDbType.VarChar, token);
                command.AddParameter("DEVICE_UUID_OUT", SqlDbType.VarChar, deviceUUID);
                command.CommandText = StoreProcedureConstants.stp_ConfigUserLoginSelectByUserTokenUUID;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).FirstOrDefault();
            }
        }

        public bool UpdateExpirationTimestamp(int idUser, string token, string deviceUUID, DateTime expirationTimestamp)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_USER_OUT", SqlDbType.Int, idUser);
                command.AddParameter("TOKEN_OUT", SqlDbType.VarChar, token);
                command.AddParameter("DEVICE_UUID_OUT", SqlDbType.VarChar, deviceUUID);
                command.AddParameter("EXPIRATION_TIMESTAMP_OUT", SqlDbType.DateTime, expirationTimestamp);
                command.CommandText = StoreProcedureConstants.stp_ConfigUserUpdateExpirationTimestamp;
                command.CommandType = CommandType.StoredProcedure;
                int affectedRows = command.ExecuteNonQuery();
                return (affectedRows > 0 ? true : false);
            }
        }
    }
}




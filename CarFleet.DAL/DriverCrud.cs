using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using System;

namespace CarFleet.DAL
{
    public class DriverCrud : CrudEntityBase<DriverEntity>
    {
        public override void Map(IDataRecord record, DriverEntity entity)
        {
            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["name"])) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["surname"])) { entity.Surname = (string)base.GetValueRecord(record["surname"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["id_company"])) { entity.Id_company = (int)base.GetValueRecord(record["id_company"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["personal_id"])) { entity.Personal_id = (string)base.GetValueRecord(record["personal_id"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["image"])) { entity.Image = (string)base.GetValueRecord(record["image"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["phone_number"])) { entity.Phone_number = (string)base.GetValueRecord(record["phone_number"], Utils.Constants.DATA_TYPES.NVARCHAR); }
        }

        public List<DriverEntity> Select(int? id, int? idCompany)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.AddParameter("ID_COMPANY_OUT", SqlDbType.Int, idCompany);
                command.CommandText = "stp_DriverSelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }        
    }
}




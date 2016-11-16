using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System;
using System.Data;
using System.Collections.Generic;

namespace CarFleet.DAL
{
    public class CompanyCrud : CrudEntityBase<CompanyEntity>
    {
        public override void Map(IDataRecord record, CompanyEntity entity)
        {
            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["name"])) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["id_companytype"])) { entity.Id_companytype = (int)base.GetValueRecord(record["id_companytype"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["id_company"])) { entity.Id_company = (int)base.GetValueRecord(record["id_company"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["cif"])) { entity.Cif = (string)base.GetValueRecord(record["cif"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["address"])) { entity.Address = (string)base.GetValueRecord(record["address"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["phone_number"])) { entity.Phone_number = (string)base.GetValueRecord(record["phone_number"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["fax_number"])) { entity.Fax_number = (string)base.GetValueRecord(record["fax_number"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["email_address"])) { entity.Email_address = (string)base.GetValueRecord(record["email_address"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["registry_date_time"])) { entity.Registry_date_time = (DateTime)base.GetValueRecord(record["registry_date_time"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record["map_address"])) { entity.Map_address = (string)base.GetValueRecord(record["map_address"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["events_email_address"])) { entity.Events_email_address = (string)base.GetValueRecord(record["events_email_address"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record["id_drivingrulesconfiguration"])) { entity.Id_drivingrulesconfiguration = (int)base.GetValueRecord(record["id_drivingrulesconfiguration"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["id_platform_service"])) { entity.Id_platform_service = (int)base.GetValueRecord(record["id_platform_service"], Utils.Constants.DATA_TYPES.INT); }
        }

        public List<CompanyEntity> Select(int? id, int? id_companytype, int? id_drivingrulesconfiguration, int? id_platform_service)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.AddParameter("ID_COMPANYTYPE_OUT", SqlDbType.Int, id_companytype);
                command.AddParameter("ID_DRIVINGRULESCONFIGURATION_OUT", SqlDbType.Int, id_drivingrulesconfiguration);
                command.AddParameter("ID_PLATFORM_SERVICE_OUT", SqlDbType.Int, id_platform_service);
                command.CommandText = "stp_CompanySelect";
                command.CommandType = CommandType.StoredProcedure;
                //return ToList(command).FirstOrDefault();
                return ToList(command).ToList();
            }
        }
    }
}




using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using System;
using CarFleet.Utils.Database;

namespace CarFleet.DAL
{
    public class VehicleCrud : CrudEntityBase<VehicleEntity>
    {
        public override void Map(IDataRecord record, VehicleEntity entity)
        {
            if (base.HasValueRecord(record, "id")) { entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_company")) { entity.Id_company = (int)base.GetValueRecord(record["id_company"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_fleet")) { entity.Id_fleet = (int)base.GetValueRecord(record["id_fleet"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_vehicletype")) { entity.Id_vehicletype = (int)base.GetValueRecord(record["id_vehicletype"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "id_driver")) { entity.Id_driver = (int)base.GetValueRecord(record["id_driver"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "name")) { entity.Name = (string)base.GetValueRecord(record["name"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "make")) { entity.Make = (string)base.GetValueRecord(record["make"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "model")) { entity.Model = (string)base.GetValueRecord(record["model"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "year")) { entity.Year = (int)base.GetValueRecord(record["year"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record, "plate")) { entity.Plate = (string)base.GetValueRecord(record["plate"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "odometer")) { entity.Odometer = (double)base.GetValueRecord(record["odometer"], Utils.Constants.DATA_TYPES.DOUBLE); }
            if (base.HasValueRecord(record, "image")) { entity.Image = (string)base.GetValueRecord(record["image"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "color")) { entity.Color = (string)base.GetValueRecord(record["color"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "chassis_number")) { entity.Chassis_number = (string)base.GetValueRecord(record["chassis_number"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "factory_color")) { entity.Factory_color = (string)base.GetValueRecord(record["factory_color"], Utils.Constants.DATA_TYPES.NVARCHAR); }
            if (base.HasValueRecord(record, "registry_date_time")) { entity.Registry_date_time = (DateTime)base.GetValueRecord(record["registry_date_time"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record, "installation_date_time")) { entity.Installation_date_time = (DateTime)base.GetValueRecord(record["installation_date_time"], Utils.Constants.DATA_TYPES.DATETIME); }
        }

        public List<VehicleEntity> SelectByCompanyId(int idCompany)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_COMPANY_OUT", SqlDbType.Int, idCompany);
                command.CommandText = StoreProcedureConstants.stp_VehicleSelectByCompanyId;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }

        public List<VehicleEntity> SelectByFleetId(int idFleet)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_FLEET_OUT", SqlDbType.Int, idFleet);
                command.CommandText = StoreProcedureConstants.stp_VehicleSelectByFleetId;
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




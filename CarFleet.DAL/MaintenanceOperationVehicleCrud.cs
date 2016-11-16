using System.Linq;
using CarFleet.Std;
using CarFleet.Models;
using System.Data;
using System.Collections.Generic;
using System;

namespace CarFleet.DAL
{
    public class MaintenanceOperationVehicleCrud : CrudEntityBase<MaintenanceOperationVehicleEntity>
    {
        public override void Map(IDataRecord record, MaintenanceOperationVehicleEntity entity)
        {
            entity.Id = (int)base.GetValueRecord(record["id"], Utils.Constants.DATA_TYPES.INT);
            if (base.HasValueRecord(record["id_vehicle"])) { entity.Id_vehicle = (int)base.GetValueRecord(record["id_vehicle"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["id_maintenanceoperation"])) { entity.Id_maintenanceoperation = (int)base.GetValueRecord(record["id_maintenanceoperation"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["distance_notification"])) { entity.Distance_notification = (int)base.GetValueRecord(record["distance_notification"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["time_notification"])) { entity.Time_notification = (int)base.GetValueRecord(record["time_notification"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["current_distance"])) { entity.Current_distance = (int)base.GetValueRecord(record["current_distance"], Utils.Constants.DATA_TYPES.INT); }
            if (base.HasValueRecord(record["starting_time"])) { entity.Starting_time = (DateTime)base.GetValueRecord(record["starting_time"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record["maintenance_performed"])) { }
            if (base.HasValueRecord(record["performing_time"])) { entity.Performing_time = (DateTime)base.GetValueRecord(record["performing_time"], Utils.Constants.DATA_TYPES.DATETIME); }
            if (base.HasValueRecord(record["notification_sent"])) { }
        }

        public List<MaintenanceOperationVehicleEntity> Select(int? id, int? idVehicle, int? idMaintenanceOperation)
        {
            using (var command = base.GetContextConnection.CreateCommand())
            {
                command.AddParameter("ID_OUT", SqlDbType.Int, id);
                command.AddParameter("ID_VEHICLE_OUT", SqlDbType.Int, idVehicle);
                command.AddParameter("ID_MAINTENANCEOPERATION_OUT", SqlDbType.Int, idMaintenanceOperation);
                command.CommandText = "stp_MaintenanceOperation_VehicleSelect";
                command.CommandType = CommandType.StoredProcedure;
                return ToList(command).ToList();
            }
        }
    }
}




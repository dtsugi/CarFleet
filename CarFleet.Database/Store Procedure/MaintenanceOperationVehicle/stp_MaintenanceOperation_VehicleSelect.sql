/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_MaintenanceOperation_VehicleSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_MaintenanceOperation_VehicleSelect
GO
CREATE PROCEDURE dbo.stp_MaintenanceOperation_VehicleSelect
(    
	@ID_OUT  INT,
	@ID_VEHICLE_OUT  INT,
	@ID_MAINTENANCEOPERATION_OUT  INT
)
AS
BEGIN
    SELECT         
id,id_vehicle,id_maintenanceoperation,distance_notification,time_notification,current_distance,starting_time,maintenance_performed,performing_time,notification_sent
    FROM dbo.MaintenanceOperation_Vehicle
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) AND
	(id_vehicle= @ID_VEHICLE_OUT OR @ID_VEHICLE_OUT IS NULL ) AND
	(id_maintenanceoperation= @ID_MAINTENANCEOPERATION_OUT OR @ID_MAINTENANCEOPERATION_OUT IS NULL )     
END
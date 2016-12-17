/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_VehicleSelectByFleetId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_VehicleSelectByFleetId
GO
CREATE PROCEDURE dbo.stp_VehicleSelectByFleetId
(
	@ID_FLEET_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_company,id_fleet,id_vehicletype,id_driver,name,make,model,year,plate,odometer,image,color,chassis_number,factory_color,registry_date_time,installation_date_time
    FROM dbo.Vehicle
    WHERE id_fleet= @ID_FLEET_OUT    
END
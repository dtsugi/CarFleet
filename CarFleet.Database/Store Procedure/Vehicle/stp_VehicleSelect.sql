/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_VehicleSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_VehicleSelect
GO
CREATE PROCEDURE dbo.stp_VehicleSelect
(    
	@ID_OUT  INT,
	@ID_COMPANY_OUT  INT,
	@ID_FLEET_OUT  INT,
	@ID_VEHICLETYPE_OUT  INT,
	@ID_DRIVER_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_company,id_fleet,id_vehicletype,id_driver,name,make,model,year,plate,odometer,image,color,chassis_number,factory_color,registry_date_time,installation_date_time
    FROM dbo.Vehicle
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) AND
	(id_company= @ID_COMPANY_OUT OR @ID_COMPANY_OUT IS NULL ) AND
	(id_fleet= @ID_FLEET_OUT OR @ID_FLEET_OUT IS NULL ) AND
	(id_vehicletype= @ID_VEHICLETYPE_OUT OR @ID_VEHICLETYPE_OUT IS NULL ) AND
	(id_driver= @ID_DRIVER_OUT OR @ID_DRIVER_OUT IS NULL )     
END
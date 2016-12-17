/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_VehicleSelectByCompanyId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_VehicleSelectByCompanyId
GO
CREATE PROCEDURE dbo.stp_VehicleSelectByCompanyId
(
	@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_company,id_fleet,id_vehicletype,id_driver,name,make,model,year,plate,odometer,image,color,chassis_number,factory_color,registry_date_time,installation_date_time
    FROM dbo.Vehicle
    WHERE 
	id_company= @ID_COMPANY_OUT 
END
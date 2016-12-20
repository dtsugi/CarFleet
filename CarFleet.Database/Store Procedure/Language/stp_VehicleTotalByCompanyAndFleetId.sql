IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_VehicleTotalByCompanyAndFleetId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_VehicleTotalByCompanyAndFleetId
GO
CREATE PROCEDURE dbo.stp_VehicleTotalByCompanyAndFleetId
(    
	@ID_COMPANY_OUT  INT,
	@ID_FLEET_OUT  INT
)
AS
BEGIN
    SELECT  COUNT(id) as result
	FROM dbo.Vehicle
    WHERE id_company= @ID_COMPANY_OUT    
    AND id_fleet = @ID_FLEET_OUT
END
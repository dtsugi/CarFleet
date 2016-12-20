IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_VehicleTotalByCompanyId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_VehicleTotalByCompanyId
GO
CREATE PROCEDURE dbo.stp_VehicleTotalByCompanyId
(    
	@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT  COUNT(id) as result
	FROM dbo.Vehicle
    WHERE id_company= @ID_COMPANY_OUT    
END
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_FleetTotalByCompanyId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_FleetTotalByCompanyId
GO
CREATE PROCEDURE dbo.stp_FleetTotalByCompanyId
(    
	@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT  COUNT(id) as result
	FROM dbo.Fleet
    WHERE id_company= @ID_COMPANY_OUT    
END
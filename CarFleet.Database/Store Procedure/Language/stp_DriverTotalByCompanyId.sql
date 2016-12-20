IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_DriverTotalByCompanyId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_DriverTotalByCompanyId
GO
CREATE PROCEDURE dbo.stp_DriverTotalByCompanyId
(    
	@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT  COUNT(id) as result
	FROM dbo.Driver
    WHERE id_company= @ID_COMPANY_OUT    
END
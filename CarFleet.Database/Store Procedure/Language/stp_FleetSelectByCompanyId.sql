/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_FleetSelectByCompanyId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_FleetSelectByCompanyId
GO
CREATE PROCEDURE dbo.stp_FleetSelectByCompanyId
(    
	@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_company,name,image
    FROM dbo.Fleet
    WHERE 
	id_company= @ID_COMPANY_OUT 
END
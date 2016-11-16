/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_MaintenanceOperation_CompanySelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_MaintenanceOperation_CompanySelect
GO
CREATE PROCEDURE dbo.stp_MaintenanceOperation_CompanySelect
(    
	@ID_OUT  INT,
	@ID_COMPANY_OUT  INT,
	@ID_MAINTENANCEOPERATION_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_company,id_maintenanceoperation
    FROM dbo.MaintenanceOperation_Company
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) AND
	(id_company= @ID_COMPANY_OUT OR @ID_COMPANY_OUT IS NULL ) AND
	(id_maintenanceoperation= @ID_MAINTENANCEOPERATION_OUT OR @ID_MAINTENANCEOPERATION_OUT IS NULL ) 
    
END
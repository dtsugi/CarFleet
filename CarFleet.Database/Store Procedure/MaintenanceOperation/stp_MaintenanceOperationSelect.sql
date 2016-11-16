/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_MaintenanceOperationSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_MaintenanceOperationSelect
GO
CREATE PROCEDURE dbo.stp_MaintenanceOperationSelect
(
	@ID_OUT  INT
)
AS
BEGIN
    SELECT         
	id,name
    FROM dbo.MaintenanceOperation
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) 
    
END
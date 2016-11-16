/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_FleetSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_FleetSelect
GO
CREATE PROCEDURE dbo.stp_FleetSelect
(   
@ID_OUT  INT,
@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_company,name,image
    FROM dbo.Fleet
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) AND
	(id_company= @ID_COMPANY_OUT OR @ID_COMPANY_OUT IS NULL ) 
    
END
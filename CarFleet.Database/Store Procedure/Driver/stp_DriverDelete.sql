/* PROCEDURE DELETE BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_DriverDelete') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_DriverDelete
GO
CREATE PROCEDURE dbo.stp_DriverDelete
(    
@ID_OUT  INT,
@ID__COMPANY_OUT  INT
)
AS
BEGIN
    DELETE FROM dbo.Driver
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) AND
	(id_company= @ID__COMPANY_OUT OR @ID__COMPANY_OUT IS NULL ) 
END

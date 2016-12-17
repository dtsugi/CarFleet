/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_DriverSelectByCompanyId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_DriverSelectByCompanyId
GO
CREATE PROCEDURE dbo.stp_DriverSelectByCompanyId
(    
	@ID_COMPANY_OUT  INT
)
AS
BEGIN
    SELECT         
	id,name,surname,id_company,personal_id,image,phone_number
    FROM dbo.Driver
    WHERE id_company= @ID_COMPANY_OUT
    
END
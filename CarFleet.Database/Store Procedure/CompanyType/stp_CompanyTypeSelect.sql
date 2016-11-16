/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_CompanyTypeSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_CompanyTypeSelect
GO
CREATE PROCEDURE dbo.stp_CompanyTypeSelect
(    
@ID_OUT  INT
)
AS
BEGIN
    SELECT         
		id,company_category
    FROM dbo.CompanyType
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL )     
END
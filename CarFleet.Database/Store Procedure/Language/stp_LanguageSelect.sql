/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_LanguageSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_LanguageSelect
GO
CREATE PROCEDURE dbo.stp_LanguageSelect
(    
@ID_OUT  INT
)
AS
BEGIN
    SELECT         
	id,hashkey,name
    FROM dbo.Language
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL )     
END
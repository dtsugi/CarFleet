/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigTagSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigTagSelect
GO
CREATE PROCEDURE dbo.stp_ConfigTagSelect
(
	@ID_OUT  INT
)
AS
BEGIN
    SELECT         
	id,tag_key,page_name
    FROM dbo.ConfigTag
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL )     
END
/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigTagInsert') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigTagInsert
GO
CREATE PROCEDURE dbo.stp_ConfigTagInsert
(
	@TAG_KEY_OUT  VARCHAR(50),
	@PAGE_NAME_OUT  VARCHAR(50)
)
AS
BEGIN
    INSERT INTO ConfigTag
    (tag_key,page_name)
    VALUES
    (@TAG_KEY_OUT,@PAGE_NAME_OUT)
    
    SELECT @@IDENTITY
END
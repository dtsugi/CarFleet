/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigTagLanguageInsert') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigTagLanguageInsert
GO
CREATE PROCEDURE dbo.stp_ConfigTagLanguageInsert
(    
	@ID_CONFIG_TAG_OUT  INT,
	@ID_LANGUAGE_OUT  INT,
	@VALUE_TAG_OUT  VARCHAR(50)
)
AS
BEGIN
    INSERT INTO ConfigTagLanguage
    (id_configTag,id_language,value_tag)
    VALUES
    (@ID_CONFIG_TAG_OUT,@ID_LANGUAGE_OUT,@VALUE_TAG_OUT)
END
/* PROCEDURE UPDATE */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigTagLanguageUpdate') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigTagLanguageUpdate
GO
CREATE PROCEDURE dbo.stp_ConfigTagLanguageUpdate
(    
@ID_CONFIG_TAG_OUT  INT,
@ID_LANGUAGE_OUT  INT,
@VALUE_TAG_OUT  VARCHAR(50)
)
AS
BEGIN
    UPDATE dbo.ConfigTagLanguage
    SET        
	value_tag= @VALUE_TAG_OUT
    WHERE 
	id_configTag= @ID_CONFIG_TAG_OUT 
	AND id_language= @ID_LANGUAGE_OUT     
END
/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigTagLanguageSelectByLanguage') AND OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigTagLanguageSelectByLanguage
GO
CREATE PROCEDURE dbo.stp_ConfigTagLanguageSelectByLanguage
(	
	@ID_LANGUAGE_OUT INT
)
AS
BEGIN
	SELECT 
		CTL.id_configTag,
		CTL.id_language,
		CTL.value_tag,
		CT.tag_key
	FROM dbo.ConfigTagLanguage CTL
	INNER JOIN dbo.ConfigTag CT
	ON CTL.id_configTag = CT.id
	WHERE CTL.id_language = @ID_LANGUAGE_OUT	
END
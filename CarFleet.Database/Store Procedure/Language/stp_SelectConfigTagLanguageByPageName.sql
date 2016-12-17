/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_SelectConfigTagLanguageByPageName') AND OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_SelectConfigTagLanguageByPageName
GO
CREATE PROCEDURE dbo.stp_SelectConfigTagLanguageByPageName
(	
	@PAGE_NAME_OUT VARCHAR(50)	
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
	WHERE CT.page_name = @PAGE_NAME_OUT	
END
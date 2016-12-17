IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_UserUpdateLanguage') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_UserUpdateLanguage
GO
CREATE PROCEDURE dbo.stp_UserUpdateLanguage
(
    @ID_OUT	INT,
    @ID_LANGUAGE_OUT INT
)
AS
BEGIN
    UPDATE [dbo].[User]
    SET id_language = @ID_LANGUAGE_OUT
    WHERE id = @ID_OUT
END
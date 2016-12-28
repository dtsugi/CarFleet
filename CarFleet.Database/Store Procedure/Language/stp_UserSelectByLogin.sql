/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_UserSelectByLogin') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_UserSelectByLogin
GO
CREATE PROCEDURE dbo.stp_UserSelectByLogin
(
    @LOGIN_OUT	NVARCHAR(50)
)
AS
BEGIN
    SELECT
	id,id_usertype,id_company,id_language,name,login,password,sign_in_date,expiration_date,events_email_address,gcm_registration_id,gcm_registration_device,surname,validation_code,user_validated
    FROM [dbo].[User]
    WHERE login = @LOGIN_OUT        
END
/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigUserLoginInsert') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigUserLoginInsert
GO
CREATE PROCEDURE dbo.stp_ConfigUserLoginInsert
(
	@ID_USER_OUT  INT,
	@TOKEN_OUT VARCHAR(50),
	@DEVICE_UUID_OUT VARCHAR(50),
	@TIMESTAMP_OUT DATETIME,
	@EXPIRATION_DATETIME_OUT DATETIME
)
AS
BEGIN
    INSERT INTO ConfigUserLogin
    (id_user,token,device_uuid,[timestamp],expiration_timestamp)
    VALUES
    (@ID_USER_OUT,@TOKEN_OUT,@DEVICE_UUID_OUT,@TIMESTAMP_OUT,@EXPIRATION_DATETIME_OUT)
    
    SELECT @@IDENTITY
END
/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigUserUpdateExpirationTimestamp') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigUserUpdateExpirationTimestamp
GO
CREATE PROCEDURE dbo.stp_ConfigUserUpdateExpirationTimestamp
(
	@ID_USER_OUT  INT,
	@TOKEN_OUT VARCHAR(50),
	@DEVICE_UUID_OUT VARCHAR(50),
	@EXPIRATION_TIMESTAMP_OUT DATETIME
)
AS
BEGIN
    UPDATE ConfigUserLogin
    SET	expiration_timestamp = @EXPIRATION_TIMESTAMP_OUT
    WHERE id_user = @ID_USER_OUT
    AND token = @TOKEN_OUT
    --AND = @DEVICE_UUID_OUT       
END
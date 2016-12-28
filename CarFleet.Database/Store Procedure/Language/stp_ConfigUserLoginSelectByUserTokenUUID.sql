/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_ConfigUserLoginSelectByUserTokenUUID') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_ConfigUserLoginSelectByUserTokenUUID
GO
CREATE PROCEDURE dbo.stp_ConfigUserLoginSelectByUserTokenUUID
(
	@ID_USER_OUT  INT,
	@TOKEN_OUT VARCHAR(50),
	@DEVICE_UUID_OUT VARCHAR(50)	
)
AS
BEGIN
    SELECT
		id,
		id_user,
		token,
		device_uuid,
		[timestamp],
		expiration_timestamp
    FROM ConfigUserLogin
    WHERE id_user = @ID_USER_OUT
    AND token = @TOKEN_OUT
    --AND = @DEVICE_UUID_OUT       
END
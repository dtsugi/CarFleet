/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_UserRestoreSelectByUserCode') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_UserRestoreSelectByUserCode
GO
CREATE PROCEDURE dbo.stp_UserRestoreSelectByUserCode
(
    @ID_USER_OUT  INT,
	@CODE_OUT VARCHAR(50)
)
AS
BEGIN
    SELECT
    id,id_user,code,created_date,expiration_date
	FROM UserRestore
    WHERE id_user = @ID_USER_OUT
    AND code = @CODE_OUT
    ORDER BY created_date ASC
END
/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_UserRestoreInsert') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_UserRestoreInsert
GO
CREATE PROCEDURE dbo.stp_UserRestoreInsert
(
	@ID_USER_OUT  INT,
	@CODE_OUT VARCHAR(50),
	@CREATED_DATE_OUT DATETIME,
	@EXPIRATION_DATE_OUT DATETIME
)
AS
BEGIN
    INSERT INTO UserRestore
    (id_user,code,created_date,expiration_date)
    VALUES
    (@ID_USER_OUT,@CODE_OUT,@CREATED_DATE_OUT,@EXPIRATION_DATE_OUT)
    
    SELECT @@IDENTITY
END
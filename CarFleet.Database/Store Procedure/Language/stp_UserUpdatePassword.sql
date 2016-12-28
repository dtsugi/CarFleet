/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_UserUpdatePassword') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_UserUpdatePassword
GO
CREATE PROCEDURE dbo.stp_UserUpdatePassword
(
    @ID_OUT	INT,
    @PASSWORD_OUT NVARCHAR(50)
)
AS
BEGIN
    UPDATE [User]
	SET [password] = @PASSWORD_OUT    
    WHERE id = @ID_OUT        
END
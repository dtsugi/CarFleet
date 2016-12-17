/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_UserFleetSelectByUserId') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_UserFleetSelectByUserId
GO
CREATE PROCEDURE dbo.stp_UserFleetSelectByUserId
(
    @ID_USER_OUT  INT
)
AS
BEGIN
    SELECT         
	id,id_user,id_fleet
    FROM dbo.User_Fleet
    WHERE id_user= @ID_USER_OUT
    
END
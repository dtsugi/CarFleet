/* PROCEDURE UPDATE */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_DriverUpdate') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
drop procedure dbo.stp_DriverUpdate
GO
CREATE PROCEDURE dbo.stp_DriverUpdate
(
	@ID_OUT  INT,
	@NAME_OUT  NVARCHAR(50),
	@SURNAME_OUT  NVARCHAR(50),
	@ID__COMPANY_OUT  INT,
	@PERSONAL__ID_OUT  NVARCHAR(50),
	@IMAGE_OUT  NVARCHAR(50),
	@PHONE__NUMBER_OUT  NVARCHAR(50)
)
AS
BEGIN
	UPDATE dbo.Driver
	SET
		name= @NAME_OUT,
		surname= @SURNAME_OUT,
		personal_id= @PERSONAL__ID_OUT,
		image= @IMAGE_OUT,
		phone_number= @PHONE__NUMBER_OUT
	WHERE 
		id= @ID_OUT AND 
		id_company= @ID__COMPANY_OUT
END

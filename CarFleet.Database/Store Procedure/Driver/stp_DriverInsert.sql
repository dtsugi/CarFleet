/* PROCEDURE INSERT */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_DriverInsert') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
drop procedure dbo.stp_DriverInsert
GO
CREATE PROCEDURE dbo.stp_DriverInsert
(    
	@ID_OUT  INT,
	@NAME_OUT  NVARCHAR(50),
	@SURNAME_OUT  NVARCHAR(50),
	@ID_COMPANY_OUT  INT,
	@PERSONAL_ID_OUT  NVARCHAR(50),
	@IMAGE_OUT  NVARCHAR(50),
	@PHONE_NUMBER_OUT  NVARCHAR(50)

)
AS
BEGIN
	INSERT INTO Driver
	(name,surname,id_company,personal_id,image,phone_number)
	VALUES
	(@NAME_OUT,@SURNAME_OUT,@ID_COMPANY_OUT,@PERSONAL_ID_OUT,@IMAGE_OUT,@PHONE_NUMBER_OUT)
END

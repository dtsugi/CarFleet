/* PROCEDURE SELECT BY ID OR ALL */
IF EXISTS (Select * From dbo.sysobjects Where id = object_id(N'dbo.stp_VehicleTypeSelect') and OBJECTPROPERTY(id, N'IsProcedure') = 1)
    drop procedure dbo.stp_VehicleTypeSelect
GO
CREATE PROCEDURE dbo.stp_VehicleTypeSelect
(    
	@ID_OUT  INT
)
AS
BEGIN
    SELECT        
	id,name,image
    FROM dbo.VehicleType
    WHERE 
	(id= @ID_OUT OR @ID_OUT IS NULL ) 
    
END
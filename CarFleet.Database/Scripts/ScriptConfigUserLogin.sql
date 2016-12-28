create table ConfigUserLogin
(
	id bigint identity(1,1) not null,
	id_user int not null,
	token varchar(50) not null,
	device_uuid varchar(50) null,
	timestamp datetime not null,
	expiration_timestamp datetime not null
)
GO

ALTER TABLE ConfigUserLogin
ADD CONSTRAINT PK_ConfigUser_Login PRIMARY KEY (id)
GO

ALTER TABLE ConfigUserLogin
ADD CONSTRAINT FK_User_ConfigUserLogin FOREIGN KEY (id_user)
REFERENCES [User] (id)
GO
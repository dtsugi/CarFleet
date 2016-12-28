create table UserRestore
(
	id bigint identity(1,1) not null,
	id_user int not null,
	code varchar(10) not null,
	created_date datetime not null,
	expiration_date datetime not null
)
GO

ALTER TABLE UserRestore
ADD CONSTRAINT PK_UserRestore PRIMARY KEY (id)
GO

ALTER TABLE UserRestore
ADD CONSTRAINT FK_User_UserRestore FOREIGN KEY (id_user)
REFERENCES [User] (id)
GO
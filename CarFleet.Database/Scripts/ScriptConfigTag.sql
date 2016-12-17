create table ConfigTag
(
	id int identity(1,1) not null,
	tag_key varchar(50) not null,
	page_name varchar(50) null	
)
GO

ALTER TABLE ConfigTag
ADD CONSTRAINT PK_Config_Tag PRIMARY KEY (id)
GO

create table ConfigTagLanguage
(
	id_configTag int not null,
	id_language	int not null,
	value_tag varchar(50) not null	
)
GO

ALTER TABLE ConfigTagLanguage
ADD CONSTRAINT PK_Config_Tag_Language PRIMARY KEY (id_configTag,id_language)
GO

ALTER TABLE ConfigTagLanguage
ADD CONSTRAINT FK_ConfigTagLanguage_ConfigTag FOREIGN KEY (id_configTag)
REFERENCES ConfigTag (id)
GO

ALTER TABLE ConfigTagLanguage
ADD CONSTRAINT FK_ConfigTagLanguage_Language FOREIGN KEY (id_language)
REFERENCES Language (id)
GO
Create table PERSONAL_DATA (
personid int ,
name varchar(100),
descr varchar(200),
	PRIMARY KEY(personid)
);

insert into PERSONAL_DATA VALUES(1,'Mary Albert','I’m a digital designer in love with photography, painting and discovering new worlds and cultures.')

Create table GENERAL_INFO (
geninfoid int ,
personid int ,
DateofBirth varchar(11),
Address varchar(200),
email varchar(50),
	primary key(geninfoid),
	constraint fk_personaldata
	foreign key(personid)
	references PERSONAL_DATA(personid)
)

insert into GENERAL_INFO VALUES(1,1,'20-01-1993','12, MARK STREET, RICHMOND, UNITED KINGDOM','maryalbert@hotmail.com')



Create table WORK_EXPERIENCE (
workexpid int ,
personid int ,
duration varchar(20),
company varchar(200),
position varchar(200),
descr varchar(200),
	primary key(workexpid),
	constraint fk_personaldata
	foreign key(personid)
	references PERSONAL_DATA(personid)
)

insert into WORK_EXPERIENCE VALUES(1,1,'2011-2012','Henry Design Systems','Junior Designer', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same,,');
insert into WORK_EXPERIENCE VALUES(2,1,'2012-2015','Design studio incorp','Designer', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same,');
insert into WORK_EXPERIENCE VALUES(3,1,'2015-present','Design studio incorp','Chief Designer', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same');

Create table EDUCATION (
educationid int ,
personid int ,
year varchar(4),
education varchar(30),
college varchar(200),
descr varchar(200),
	primary key(educationid),
	constraint fk_personaldata
	foreign key(personid)
	references PERSONAL_DATA(personid)
)

insert into EDUCATION VALUES(1,1,'2006','B.S Design','London Design college', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same');
insert into EDUCATION VALUES(2,1,'2010','M.S Design','Cambridge University', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same');


Create table PORTFOLIO (
portfolioid int ,
personid int ,
mission varchar(50),
descr varchar(200),
	primary key(portfolioid),
	constraint fk_personaldata
	foreign key(personid)
	references PERSONAL_DATA(personid)
)
insert into PORTFOLIO VALUES(1,1,'MASTER DESIGN', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same');
insert into PORTFOLIO VALUES(2,1,'UFO Design ', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same');
insert into PORTFOLIO VALUES(3,1,'Logo Design', 'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same');

Create table referencelist (
referencelistid int ,
personid int ,
descr varchar(200),
providedby varchar(50),
designation varchar(100),
organisation varchar(100),
	primary key(referencelistid),
	constraint fk_personaldata
	foreign key(personid)
	references PERSONAL_DATA(personid)
)

insert into referencelist VALUES(1,1,'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same', 'Miland Soman','Client','Miland Milk products,London');
insert into referencelist VALUES(2,1,'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same', 'Laura whitman','Vice president','Henry logistics,New Jersey');
insert into referencelist VALUES(3,1,'This character description generator will generate a fairly random description of a belonging to a random race. However, some aspects of the descriptions will remain the same','Henry Boyle','Chief Designer','Hubbie design systems,Berlin');

Create table leads (
leadid int,
name varchar(100),
email varchar(50),
	subject varchar(200),
	message varchar(200),
	primary key(leadid)
)











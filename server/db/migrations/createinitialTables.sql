create table encounter
(PatientEncounterID varchar(255),
MRN varchar(255),
PatientFirstNM varchar(255),
PatientLastNM varchar(255),
SexDSC varchar(255),
BirthDTS TIMESTAMP,
WeightPoundsNBR  varchar(255),
HospitalAdmitDTS TIMESTAMP,
HospitalDischargeDTS TIMESTAMP,
DepartmentNM varchar(255),
LocationNM varchar(255),
CurrentUnitNM varchar(255),
CurrentRoomNM varchar(255),
CurrentBedNM varchar(255),
HospitalServiceDSC varchar(255),
CurrentProviderNM varchar(255),
PrimaryDiagnosisDSC varchar(255),
FinancialClassDSC varchar(255)
)



create table triggerref
(TriggerID varchar(255),
TriggerNM varchar(255),
TriggerCategoryDSC varchar(255),
TriggerTypeDSC varchar(255)
);


create table adverseevent
(
triggersourcedataid varchar(100),
aeflg varchar(10),
aedescription text,
aedts TIMESTAMP,
POA varchar(10),
severity varchar(10),
aelocation varchar(255),
aecategory varchar(255),
regreportflg varchar(10),
qipflg varchar(10)
);


create table comments
(
commentid SERIAL PRIMARY KEY,
triggersourcedataid varchar(100),
commentTXT text,
commentDTS TIMESTAMP,
commentbyuser varchar(100)
);


create table users
(
usersid SERIAL PRIMARY KEY,
username varchar(255),
password varchar(255)
);

create table usersassign
(
usersid varchar(10),
username varchar(255),
triggersourcedataid varchar(255)
);


create table userswatch
(
usersid varchar(10),
username varchar(255),
triggersourcedataid varchar(255)
)
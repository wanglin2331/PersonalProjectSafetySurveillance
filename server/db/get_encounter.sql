select  distinct
        patientencounterid,
        mrn,
        patientfirstnm,
        patientlastnm,
        sexdsc,
        birthdts,
        weightpoundsnbr,
        hospitaladmitdts,
        hospitaldischargedts,
        departmentnm,
        locationnm,
        currentunitnm,
        currentroomnm,
        currentbednm,
        hospitalservicedsc,
        currentprovidernm,
        primarydiagnosisdsc,
        financialclassdsc,
        cast(DATE_PART('hour',coalesce(hospitaldischargedts,now())-hospitaladmitdts)/24.0 as decimal(6,1)) as LOS
from encounter
where patientencounterid=${encounterid};
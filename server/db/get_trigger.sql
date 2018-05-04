select t.triggerstatus,
        t.username,
        t.triggerid,
        r.triggernm,
        r.triggercategorydsc,
        r.triggertypedsc,
        t.triggersourcedataid,
        t.triggerencounterid,
        t.triggerservicedsc,
        t.triggerunitnm,
        t.triggerroomnm,
        t.triggerbednm,
        t.triggerdsc,
        t.triggervaluedsc,
        t.triggerunitdsc,
        t.triggerdts,
        t.prereqeventsourcedataid,
        t.prereqeventencounterid,
        t.prereqeventservicedsc,
        t.prereqeventunitnm,
        t.prereqeventlocationnm,
        t.prereqeventdsc,
        t.prereqeventvaluedsc,
        t.prereqeventunitdsc,
        t.prereqeventdts,
        t.relatedeventdts,
        t.relatedeventtypedsc,
        t.relatedeventdsc,
        adv.aeflg,
        adv.aedts,
        adv.aedescription,
        adv.severity,
        adv.aelocation,
        adv.aecategory,
        adv.poa,
        adv.regreportflg,
        adv.qipflg,
        adv.updateddts,
        adv.notebyuser,
        e.patientfirstnm,
        e.patientlastnm,
        e.mrn,
        e.patientencounterid,
        e.locationnm
        -- c.commenttxt,
        -- c.commentdts
from triggers t
INNER JOIN encounter e
    ON e.patientencounterid=t.triggerencounterid
INNER JOIN triggerref r
    ON r.triggerid=t.triggerid
LEFT JOIN adverseevent adv
    ON adv.triggersourcedataid::varchar =t.triggersourcedataid::varchar
-- LEFT JOIN comments c
--     ON c.triggersourcedataid::varchar=t.triggersourcedataid::varchar
WHERE t.triggersourcedataid=${triggersourcedataid};
    
    
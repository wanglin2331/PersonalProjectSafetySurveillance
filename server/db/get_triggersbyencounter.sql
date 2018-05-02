select  e.mrn,
        t.triggerstatus,
        t.triggerid,
        r.triggernm,
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
        adv.aeflg
from triggers t
INNER JOIN triggerref r
    ON r.triggerid=t.triggerid
LEFT JOIN adverseevent adv
    ON adv.triggersourcedataid::varchar =t.triggersourcedataid::varchar
INNER JOIN encounter e
    ON e.patientencounterid=t.triggerencounterid
 WHERE e.mrn=${mrn}
order by t.triggerdts desc
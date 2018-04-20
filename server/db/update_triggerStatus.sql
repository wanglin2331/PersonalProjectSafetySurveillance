update triggers
set triggerstatus=${triggerstatus}
where triggersourcedataid=${triggersourcedataid}
;

select triggerstatus, triggersourcedataid
from triggers
where triggersourcedataid=${triggersourcedataid};

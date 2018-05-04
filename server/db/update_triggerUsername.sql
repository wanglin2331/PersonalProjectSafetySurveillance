update triggers
set username=${username}
where triggersourcedataid=${triggersourcedataid}
;

select username, triggersourcedataid
from triggers
where triggersourcedataid=${triggersourcedataid};

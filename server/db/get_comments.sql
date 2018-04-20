select commenttxt, commentdts, commentbyuser
from comments
where triggersourcedataid=${triggersourcedataid}
order by commentdts;
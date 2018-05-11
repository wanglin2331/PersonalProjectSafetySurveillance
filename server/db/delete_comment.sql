delete from comments
where commentid=${commentid} and commentbyuser=${username};

select commentid, commenttxt, commentdts, commentbyuser
from comments
where triggersourcedataid=${triggersourcedataid}
order by commentdts;
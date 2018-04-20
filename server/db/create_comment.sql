insert into comments
values
(${triggersourcedataid}, ${commenttxt}, CURRENT_TIMESTAMP, ${commentbyuser});

select commenttxt, commentdts, commentbyuser
from comments
where triggersourcedataid=${triggersourcedataid}
order by commentdts;
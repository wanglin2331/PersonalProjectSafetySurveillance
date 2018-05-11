insert into comments (triggersourcedataid,commentTXT,commentDTS,commentbyuser)
values
(${triggersourcedataid}, ${commenttxt}, CURRENT_TIMESTAMP, ${commentbyuser});

select commentid, commenttxt, commentdts, commentbyuser
from comments
where triggersourcedataid=${triggersourcedataid}
order by commentdts;
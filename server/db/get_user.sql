select *
from users
where username=${username} and password=md5(${password});
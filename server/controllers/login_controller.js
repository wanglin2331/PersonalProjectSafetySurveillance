module.exports = {
    login: (req,res,next)=>{
        console.log(1, req.session.user)
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.get_user({username, password})
            .then(user => {
                    if (user[0]) {
                        req.session.user.password = password;
                        req.session.user.username = username;
                        req.session.save()
                        console.log('this is login req.session.user',req.session.user.username);
                        res.status(200).send(req.session.user)
                    } else {
                        res.status(403).send('invalid username or password')
                        }
            })
            .catch((err)=>console.error('error: ',err)
            )   
    },

    getUserInfo: (req, res) => {
        console.log(2, req.session.user)
        // console.log(1111, 'getUserInfo', req.session.user.username)
        if (req.session.user.username) {
            // console.log('this is getuserinfo req.session.user',req.session.user.username);
          return res.send(req.session.user);
        } else {
            // console.log('this is failed getuserinfo req.session.user',req.session.user.username);
          return res.status(404).send("user not authenticated");
        }
    },

    logout: (req,res,next)=>{
        req.session.destroy();
        // console.log('this is logout req.session.user',req.session);

        res.status(200).send(req.session) 

              
    }

}
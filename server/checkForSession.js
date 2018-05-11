module.exports = function (req,res,next){
    console.log(3, req.session.user)
    if(!req.session.user){
        req.session.user={
            username: '',
            password: ''
        }
    }
    next();
};
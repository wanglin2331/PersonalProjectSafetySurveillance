module.exports = {
    getTriggers: (req,res)=>{
        const db = req.app.get('db');
        db.get_triggers()
        .then(triggers=>{  
            req.session.user.triggers=triggers;
            
            res.status(200).send(triggers);
        })
        .catch(err=>console.error(err))
    },

    getTrigger: (req,res)=>{
        const db = req.app.get('db');
        const { triggersourcedataid } = req.params;
        db.get_trigger({triggersourcedataid})
        .then(trigger=>{   
             console.log('this is the selected trigger',trigger[0].triggersourcedataid);           
            res.status(200).send(trigger);
        })
        .catch(err=>console.error(err))
    },

    updateTriggerStatus: (req,res)=>{
        const db = req.app.get('db');
        const { triggersourcedataid } = req.params;
        const {triggerstatus} = req.body;
        db.update_triggerStatus({triggerstatus, triggersourcedataid})
        .then(status=>{   
            console.log('this is the new status for this trigger',status);           
            res.status(200).send(status);
        })
        .catch(err=>console.error(err))
    },

    createAdverseEvent: (req,res)=>{
        const db = req.app.get('db');
        const { triggersourcedataid } = req.params;
        const {aeflg, aedts, aedescription, severity, aelocation, aecategory, poa, regreportflg, qipflg, notebyuser} = req.body;
        let aeObj = {triggersourcedataid, aeflg, aedescription, aedts, poa, severity, aelocation, aecategory, regreportflg, qipflg, notebyuser};
        db.create_ae(aeObj).then(results => {
            res.send(results)
        });
    },

    getComment: (req,res)=>{
        const db = req.app.get('db');
        const { triggersourcedataid } = req.params;
        db.get_comments({triggersourcedataid})
        .then(comment=>{            
            res.status(200).send(comment);
        })
        .catch(err=>console.error(err))
    },

    createComment: (req,res)=>{
        const db = req.app.get('db');
        const { triggersourcedataid } = req.params;
        const {commenttxt, commentbyuser} = req.body;
        let commentObj = {triggersourcedataid, commenttxt, commentbyuser};
        db.create_comment(commentObj).then(comments => {
            res.send(comments)
        });
    },

    getYourTriggers: (req,res)=>{
        const db = req.app.get('db');
        const { username } = req.params;
        db.get_yourtriggers({username})
        .then(triggers=>{              
            res.status(200).send(triggers);
        })
        .catch(err=>console.error(err))
    },

    updateTriggerUsername: (req,res)=>{
        const db = req.app.get('db');
        const {username} = req.body;
        const {triggersourcedataid} = req.params;
        db.update_triggerUsername({username, triggersourcedataid}).then(username =>{
            res.send(username)
        })
        .catch(err=>console.error(err))
    }

}

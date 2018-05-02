module.exports = {


    getEncounter: (req,res)=>{
        const db = req.app.get('db');
        const { encounterid } = req.params;
        db.get_encounter({encounterid})
        .then(encounter=>{            
            res.status(200).send(encounter);
        })
        .catch(err=>console.error(err))
    },

    getTriggersbyEncounter: (req,res)=>{
        const db = req.app.get('db');
        const { mrn } = req.params;
        db.get_triggersbyencounter({mrn})
        .then(triggers=>{            
            res.status(200).send(triggers);
        })
        .catch(err=>console.error(err))
    }

}


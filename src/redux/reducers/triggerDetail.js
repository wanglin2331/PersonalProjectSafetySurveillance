import axios from 'axios';

const initialState = {
    selectedTriggerSourceDataID: '',
    triggerstatus: '',
    triggerid: '',
    triggernm: '',
    triggercategorydsc: '',
    triggertypedsc: '',
    triggersourcedataid: '',
    triggerencounterid: '',
    triggerservicedsc: '',
    triggerunitnm: '',
    triggerroomnm: '',
    triggerbednm: '',
    triggerdsc: '',
    triggervaluedsc: '',
    triggerunitdsc: '',
    triggerdts: '',
    prereqeventsourcedataid: '',
    prereqeventencounterid: '',
    prereqeventservicedsc: '',
    prereqeventunitnm: '',
    prereqeventlocationnm: '',
    prereqeventdsc: '',
    prereqeventvaluedsc: '',
    prereqeventunitdsc: '',
    prereqeventdts: '',
    relatedeventdts: '',
    relatedeventtypedsc: '',
    relatedeventdsc: '',
    aeflg: '',
    aedts: '',
    aedescription: '',
    severity: '',
    aelocation: '',
    aecategory: '',
    poa: '',
    regreportflg: '',
    qipflg: '',
    updateddts: '',
    notebyuser: '',
    patientfirstnm: '',
    patientlastnm: '',
    mrn: '',
    patientencounterid: '',
    locationnm: '',
    comments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTTRIGGER':
            return Object.assign({},state,{ selectedTriggerSourceDataID: action.payload });
        
            case 'GETTRIGGER_FULFILLED':
            return Object.assign({},state,{ 
                                    triggerstatus: action.payload.triggerstatus,
                                    triggerid: action.payload.triggerid,
                                    triggernm: action.payload.triggernm,
                                    triggercategorydsc: action.payload.triggercategorydsc,
                                    triggertypedsc: action.payload.triggertypedsc,
                                    triggersourcedataid: action.payload.triggersourcedataid,
                                    triggerencounterid: action.payload.triggerencounterid,
                                    triggerservicedsc: action.payload.triggerservicedsc,
                                    triggerunitnm: action.payload.triggerunitnm,
                                    triggerroomnm: action.payload.triggerroomnm,
                                    triggerbednm: action.payload.triggerbednm,
                                    triggerdsc: action.payload.triggerdsc,
                                    triggervaluedsc: action.payload.triggervaluedsc,
                                    triggerunitdsc: action.payload.triggerunitdsc,
                                    triggerdts: action.payload.triggerdts,
                                    prereqeventsourcedataid: action.payload.prereqeventsourcedataid,
                                    prereqeventencounterid: action.payload.prereqeventencounterid,
                                    prereqeventservicedsc: action.payload.prereqeventservicedsc,
                                    prereqeventunitnm: action.payload.prereqeventunitnm,
                                    prereqeventlocationnm: action.payload.prereqeventlocationnm,
                                    prereqeventdsc: action.payload.prereqeventdsc,
                                    prereqeventvaluedsc: action.payload.prereqeventvaluedsc,
                                    prereqeventunitdsc: action.payload.prereqeventunitdsc,
                                    prereqeventdts: action.payload.prereqeventdts,
                                    relatedeventdts: action.payload.relatedeventdts,
                                    relatedeventtypedsc: action.payload.relatedeventtypedsc,
                                    relatedeventdsc: action.payload.relatedeventdsc,
                                    aeflg: action.payload.aeflg,
                                    aedts: action.payload.aedts,
                                    aedescription: action.payload.aedescription,
                                    severity: action.payload.severity,
                                    aelocation: action.payload.aelocation,
                                    aecategory: action.payload.aecategory,
                                    poa: action.payload.poa,
                                    regreportflg: action.payload.regreportflg,
                                    qipflg: action.payload.qipflg,
                                    updateddts: action.payload.updateddts,
                                    notebyuser: action.payload.notebyuser,
                                    patientfirstnm: action.payload.patientfirstnm,
                                    patientlastnm: action.payload.patientlastnm,
                                    mrn: action.payload.mrn,
                                    patientencounterid: action.payload.patientencounterid,
                                    locationnm: action.payload.locationnm
            });
            
            case 'UPDATETRIGGERSTATUS_FULFILLED':
            return Object.assign({},state,{ 
                                    triggerstatus: action.payload.triggerstatus});

            case 'CREATEADVERSEEVENT_FULFILLED':
            return Object.assign({},state,{ 
                                    triggerstatus: action.payload.triggerstatus,
                                    triggerid: action.payload.triggerid,
                                    triggernm: action.payload.triggernm,
                                    triggercategorydsc: action.payload.triggercategorydsc,
                                    triggertypedsc: action.payload.triggertypedsc,
                                    triggersourcedataid: action.payload.triggersourcedataid,
                                    triggerencounterid: action.payload.triggerencounterid,
                                    triggerservicedsc: action.payload.triggerservicedsc,
                                    triggerunitnm: action.payload.triggerunitnm,
                                    triggerroomnm: action.payload.triggerroomnm,
                                    triggerbednm: action.payload.triggerbednm,
                                    triggerdsc: action.payload.triggerdsc,
                                    triggervaluedsc: action.payload.triggervaluedsc,
                                    triggerunitdsc: action.payload.triggerunitdsc,
                                    triggerdts: action.payload.triggerdts,
                                    prereqeventsourcedataid: action.payload.prereqeventsourcedataid,
                                    prereqeventencounterid: action.payload.prereqeventencounterid,
                                    prereqeventservicedsc: action.payload.prereqeventservicedsc,
                                    prereqeventunitnm: action.payload.prereqeventunitnm,
                                    prereqeventlocationnm: action.payload.prereqeventlocationnm,
                                    prereqeventdsc: action.payload.prereqeventdsc,
                                    prereqeventvaluedsc: action.payload.prereqeventvaluedsc,
                                    prereqeventunitdsc: action.payload.prereqeventunitdsc,
                                    prereqeventdts: action.payload.prereqeventdts,
                                    relatedeventdts: action.payload.relatedeventdts,
                                    relatedeventtypedsc: action.payload.relatedeventtypedsc,
                                    relatedeventdsc: action.payload.relatedeventdsc,
                                    aeflg: action.payload.aeflg,
                                    aedts: action.payload.aedts,
                                    aedescription: action.payload.aedescription,
                                    severity: action.payload.severity,
                                    aelocation: action.payload.aelocation,
                                    aecategory: action.payload.aecategory,
                                    poa: action.payload.poa,
                                    regreportflg: action.payload.regreportflg,
                                    qipflg: action.payload.qipflg,
                                    updateddts: action.payload.updateddts,
                                    notebyuser: action.payload.notebyuser,
                                    patientfirstnm: action.payload.patientfirstnm,
                                    patientlastnm: action.payload.patientlastnm,
                                    mrn: action.payload.mrn,
                                    patientencounterid: action.payload.patientencounterid,
                                    locationnm: action.payload.locationnm
            });

            case 'GETCOMMENTS_FULFILLED':
            return Object.assign({},state,{ comments: action.payload });

            case 'CREATECOMMENT_FULFILLED':
            return Object.assign({},state,{ comments: action.payload });
        
    default:
      return state
  }
};

export function selectTrigger(triggersourcedataid){
    return {
        type: 'SELECTTRIGGER',
        payload: triggersourcedataid
    }
};

export function getTrigger(triggersourcedataid){
    return {
        type: 'GETTRIGGER',
        payload: axios.get(`/api/${triggersourcedataid}`)
        .then( response => {
            //   console.log('222222222222',response.data[0]);
        return response.data[0];
      })
    }
};

export function updateTriggerStatus(triggerstatus,triggersourcedataid){
    return {
        type: 'UPDATETRIGGERSTATUS',
        payload: axios.put(`/api/${triggersourcedataid}`,{ triggerstatus })
        .then( response => {
            //   console.log('statusssssss',response.data[0]);
        return response.data[0];
      })
    }
};

export function createAdverseEvent(triggersourcedataid, aeflg, aedescription, aedts, poa, severity, aelocation, aecategory, regreportflg, qipflg, notebyuser){
    return {
        type: 'CREATEADVERSEEVENT',
        payload: axios.post(`/api/ae/${triggersourcedataid}`,{ triggersourcedataid, aeflg, aedescription, aedts, poa, severity, aelocation, aecategory, regreportflg, qipflg, notebyuser })
        .then (response => {
            return response.data[0];
        })
    }
};

export function getComments(triggersourcedataid){
    return {
        type: 'GETCOMMENTS',
        payload: axios.get(`/api/comments/${triggersourcedataid}`)
        .then( response => {
        return response.data;
      })
    }
};

export function createComment(triggersourcedataid, commenttxt, commentbyuser){
    return {
        type: 'CREATECOMMENT',
        payload: axios.post(`/api/comments/${triggersourcedataid}`, {triggersourcedataid, commenttxt, commentbyuser})
        .then( response => {
        return response.data;
      })
    }
};


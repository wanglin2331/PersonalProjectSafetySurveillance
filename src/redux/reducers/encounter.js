import axios from 'axios';

const initialState = {
        selectedpatientencounterid:'',
        selectedpatientMRN:'',
        patientencounterid: '',
        mrn: '',
        patientfirstnm: '',
        patientlastnm: '',
        sexdsc: '',
        birthdts: '',
        weightpoundsnbr: '',
        hospitaladmitdts: '',
        hospitaldischargedts: '',
        departmentnm: '',
        locationnm: '',
        currentunitnm: '',
        currentroomnm: '',
        currentbednm: '',
        hospitalservicedsc: '',
        currentprovidernm: '',
        primarydiagnosisdsc: '',
        financialclassdsc: '',
        LOS: '',
        EncounterTriggers: []

};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SELECTENCOUNTER':
            return Object.assign({},state,{ selectedpatientencounterid: action.payload });
        
        case 'SELECTMRN':
            return Object.assign({},state,{ selectedpatientMRN: action.payload });

        case 'GETENCOUNTER_FULFILLED':
            return Object.assign({},state,{ patientencounterid: action.payload.patientencounterid,
                                            mrn: action.payload.mrn,
                                            patientfirstnm: action.payload.patientfirstnm,
                                            patientlastnm: action.payload.patientlastnm,
                                            sexdsc: action.payload.sexdsc,
                                            birthdts: action.payload.birthdts,
                                            weightpoundsnbr: action.payload.weightpoundsnbr,
                                            hospitaladmitdts: action.payload.hospitaladmitdts,
                                            hospitaldischargedts: action.payload.hospitaldischargedts,
                                            departmentnm: action.payload.departmentnm,
                                            locationnm: action.payload.locationnm,
                                            currentunitnm: action.payload.currentunitnm,
                                            currentroomnm: action.payload.currentroomnm,
                                            currentbednm: action.payload.currentbednm,
                                            hospitalservicedsc: action.payload.hospitalservicedsc,
                                            currentprovidernm: action.payload.currentprovidernm,
                                            primarydiagnosisdsc: action.payload.primarydiagnosisdsc,
                                            financialclassdsc: action.payload.financialclassdsc,
                                            LOS: action.payload.LOS
                                        }
                                );
        case 'GETENCOUNTERTRIGGERS_FULFILLED':
            return Object.assign({},state,{ EncounterTriggers: action.payload});

    default:
      return state
  }
};


export function selectEncounter(patientencounterid){
    return {
        type: 'SELECTENCOUNTER',
        payload: patientencounterid
    }
};

export function selectMRN(MRN){
    return {
        type: 'SELECTMRN',
        payload: MRN
    }
};


export function getEncounter(encounterid){
    // console.time('api loading time')
    return {
        type: 'GETENCOUNTER',
        payload: axios.get(`/api/encounter/${encounterid}`)
            .then( response => {
            // console.timeEnd('api loading time');
            return response.data[0];
          })
    }
};

export function getEncounterTriggers(mrn){
    return {
        type: 'GETENCOUNTERTRIGGERS',
        payload: axios.get(`/api/encountertriggers/${mrn}`)
            .then( response => {
            return response.data;
          })
    }
};

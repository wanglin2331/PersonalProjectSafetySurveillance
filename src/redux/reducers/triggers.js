import axios from 'axios';

const initialState = {
    allTriggers: [],
    coagulationTriggers:[],
    glycemicTriggers:   [],
    infectionsTriggers: [],
    medicationTriggers: [],
    painTriggers:       [],
    patientCareTriggers:[],
    pediatricTriggers:  [],
    perinatalTriggers:  [],
    readmissionTriggers:[],
    renalInjuryTriggers:[],
    surgicalTriggers:   []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GETTRIGGERS_FULFILLED':
        // console.log('these are the triggers',action.payload);
            return Object.assign({},state,{ allTriggers: action.payload,
                                            coagulationTriggers:action.payload.filter(item => item.triggercategorydsc === 'Coagulation'),
                                            glycemicTriggers:   action.payload.filter(item => item.triggercategorydsc === 'Glycemic'),
                                            infectionsTriggers: action.payload.filter(item => item.triggercategorydsc === 'Healthcare Associated Infections'),
                                            medicationTriggers: action.payload.filter(item => item.triggercategorydsc === 'Medication Reversal'),
                                            painTriggers:       action.payload.filter(item => item.triggercategorydsc === 'Pain Management'),
                                            patientCareTriggers:action.payload.filter(item => item.triggercategorydsc === 'Patient Care'),
                                            pediatricTriggers:  action.payload.filter(item => item.triggercategorydsc === 'Pediatric'),
                                            perinatalTriggers:  action.payload.filter(item => item.triggercategorydsc === 'Perinatal'),
                                            readmissionTriggers:action.payload.filter(item => item.triggercategorydsc === 'Readmission'),
                                            renalInjuryTriggers:action.payload.filter(item => item.triggercategorydsc === 'Renal Injury'),
                                            surgicalTriggers:   action.payload.filter(item => item.triggercategorydsc === 'Surgical')
                                        }
                                );

    default:
      return state
  }
};

export function getTriggers(){
    console.time('api loading time')
    return {
        type: 'GETTRIGGERS',
        payload: axios.get('/api/triggers')
            .then( response => {
                //  console.log('222222222222',response.data);
            console.timeEnd('api loading time');
            return response.data;
          })
    }
};

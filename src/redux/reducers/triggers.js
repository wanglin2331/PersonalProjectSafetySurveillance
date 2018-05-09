import axios from 'axios';

axios.defaults.withCredentials = true;
const initialState = {
    username: null,
    loginStatus: null,



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
    // console.log('this is the state in reducer',state);
    switch (action.type) {
        case 'LOGIN_FULFILLED':
        console.log('this is LOGIN payload',action.payload);
            return Object.assign({},state,{username: action.payload.username, loginStatus: 'Success'});

        case 'LOGIN_PENDING':
                return Object.assign({},state,{loginStatus: 'Pending'}); 

        case 'LOGIN_REJECTED':
        console.log('this is LOGIN rejected payload',action.payload);
                return Object.assign({},state,{loginStatus: ''});

        case 'GETUSERINFO_FULFILLED':
        console.log('22222222 this is getuserinfo fulfilled payload',action.payload);
                return Object.assign({},state,{username: action.payload.username, loginStatus: 'Success'});
                
        case 'LOGOUT_FULFILLED':
            // console.log('this is LOGOUT payload',action.payload);
                return Object.assign({},state,{ username: null,
                                                loginStatus: null}
                                        );






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
        
        case 'SELECTMYTRIGGERS':
            return Object.assign({},state,{ allTriggers:        state.allTriggers.filter(item => item.username === state.username),
                                            coagulationTriggers:state.coagulationTriggers.filter(item => item.username === state.username),
                                            glycemicTriggers:   state.glycemicTriggers.filter(item => item.username === state.username),
                                            infectionsTriggers: state.infectionsTriggers.filter(item => item.username === state.username),
                                            medicationTriggers: state.medicationTriggers.filter(item => item.username === state.username),
                                            painTriggers:       state.painTriggers.filter(item => item.username === state.username),
                                            patientCareTriggers:state.patientCareTriggers.filter(item => item.username === state.username),
                                            pediatricTriggers:  state.pediatricTriggers.filter(item => item.username === state.username),
                                            perinatalTriggers:  state.perinatalTriggers.filter(item => item.username === state.username),
                                            readmissionTriggers:state.readmissionTriggers.filter(item => item.username === state.username),
                                            renalInjuryTriggers:state.renalInjuryTriggers.filter(item => item.username === state.username),
                                            surgicalTriggers:   state.surgicalTriggers.filter(item => item.username === state.username)
                                        }
                                );                        

    default:
      return state
  }
};


export function login(user){
    return {
        type: 'LOGIN',
        payload: axios.post('/api/login', user)
            .then( response => {
                // console.log(response.data);
            return response.data;
          })
    }
};

export function getUserInfo(){
    return {
        type: 'GETUSERINFO',
        payload: axios.get('/api/me', {withCredentials: true})
        .then( response => {
            //  console.log('1111111 this is getuserinfo response.data',response.data);
        return response.data;
    })
    }
};

export function logout(){
    return {
        type: 'LOGOUT',
        payload: axios.post('/api/logout')
            .then( response => {
                // console.log(response.data);
            return response.data;
          })
    }
};





export function getTriggers(){
    // console.time('api loading time')
    return {
        type: 'GETTRIGGERS',
        payload: axios.get('/api/triggers')
            .then( response => {
                //  console.log('222222222222',response.data);
            // console.timeEnd('api loading time');
            return response.data;
          })
    }
};



export function selectMyTriggers(){
    return {
        type: 'SELECTMYTRIGGERS'
    }
};



import { combineReducers } from 'redux'

// import user from './user'
import triggers from './triggers'
import triggerDetail from './triggerDetail'
import encounter from './encounter'

export default combineReducers({ triggers, triggerDetail, encounter })
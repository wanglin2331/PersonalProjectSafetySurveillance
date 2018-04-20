import { combineReducers } from 'redux'

import user from './user'
import triggers from './triggers'
import triggerDetail from './triggerDetail'

export default combineReducers({ user, triggers, triggerDetail })
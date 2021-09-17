import { combineReducers } from 'redux'
import welcomeReducer from './pageModes/welcome/welcomeReducer'

const rootReducer = combineReducers({
    welcome: welcomeReducer,
})

export default rootReducer

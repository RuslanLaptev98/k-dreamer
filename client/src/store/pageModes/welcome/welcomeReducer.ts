import { SET_TO_SIGN_UP, SET_TO_SIGN_IN } from './welcomeTypes'

interface WelcomePageState {
    mode: number
}

interface WelcomePageAction {
    type: string
    payload?: any
}

const initialState: WelcomePageState = {
    mode: 1,
}

const welcomeReducer = (
    state = initialState,
    action: WelcomePageAction
): WelcomePageState => {
    switch (action.type) {
        case SET_TO_SIGN_UP:
            return {
                ...state,
                mode: 0,
            }
        case SET_TO_SIGN_IN:
            return {
                ...state,
                mode: 1,
            }
        default:
            return state
    }
}

export default welcomeReducer

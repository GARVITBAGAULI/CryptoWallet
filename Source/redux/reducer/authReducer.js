import * as constants from '../constants/constants'

const defautState = {

    token: null,

}
const INITIAL_STATE = defautState;

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case constants.ON_LOG_USER:
            console.log("LOG USER", action.payload)
            return { ...action.payload }

            case constants.ON_REG_USER:
                console.log("Register USER", action.payload)
                return { ...action.payload }
       
        default:
            return state;
    }
}
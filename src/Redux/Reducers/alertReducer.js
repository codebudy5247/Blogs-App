import { GLOBALTYPES } from '../Actions/globalTypes'

const initialState = {}

export const alertReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.ALERT:
            return action.payload;
        default:
            return state;
    }
}



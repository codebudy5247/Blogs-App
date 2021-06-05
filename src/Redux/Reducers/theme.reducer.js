import { GLOBALTYPES } from '../Actions/globalTypes'

const initialState = false

export const themeReducer = (state = initialState, action) => {
    switch (action.type){
        case GLOBALTYPES.THEME:
            return action.payload;
        default:
            return state;
    }
}


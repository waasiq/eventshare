import { GLOBALTYPES } from '../actions/globalTypes';

const initialState =  {}

const authReducer = (state = initialState, action: any ) => {
    switch (action.type) {
        case GLOBALTYPES.AUTH:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer
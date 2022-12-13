import { GLOBALTYPES } from '../types/global';

const activityReducer = (state:any = false, action:any) => {
    switch (action.type) {
        case GLOBALTYPES.SET_ACTIVITY_SEARCH:
            return action.payload;
        default:
            return state;
    }
}

export default activityReducer;
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notifyReducer from './notifyReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer
})

export default rootReducer
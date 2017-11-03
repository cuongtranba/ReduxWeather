import { combineReducers } from 'redux';
import {IsValid} from './reducer_address';
import {Address} from './reducer_address';
const rootReducer = combineReducers({
    isValid: IsValid,
    address : Address
});

export default rootReducer;

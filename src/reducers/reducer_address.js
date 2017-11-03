import {ACTION_TYPES} from '../actions/address_action'


export function IsValid(state = {}, action) {
    switch (action.type) {
        case ACTION_TYPES.IS_VALID:
            let address = action.payload;                    
            let result = {
                ward:false,
                district:false
            }
            if(address.City){
                return result;                    
            }else{
                if (!address.District) {
                    result.district = true
                }
                if (!address.Ward) {
                    result.ward = true
                }
            }
            return result
        default:
            return state;
    }
    return state;
}

export function Address(state = [], action) {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ADDRESS:
            return [...action.payload, ...state];
        default:
            return state;
    }
    return state;
}
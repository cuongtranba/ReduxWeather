import {ACTION_TYPES} from '../actions/address_action'

export function IsValid(state = {}, action) {
    switch (action.type) {
        case ACTION_TYPES.IS_VALID:
            let address = action.payload;
            let result = {
                ward: "",
                district: "",
                streetName: ""
            }
            if (!address.StreetName) {
                result.streetName = "has-error"
            }
            if (address.City) {
                return result;
            } else {
                if (!address.District) {
                    result.district = "has-error"
                }
                if (!address.Ward) {
                    result.ward = "has-error"
                }
            }
            return result
        default:
            return state;
    }
    return state;
}

export function Address(state = {}, action) {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ADDRESS:
            return action.payload;
        case ACTION_TYPES.ADD_NEW_ADDRESS:
            console.log(action.payload);
            return { ...state, ...action.payload };
        default:
            return state;
    }
    return state;
}

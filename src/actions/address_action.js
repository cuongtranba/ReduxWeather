import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBkydVSG5JZx43ttkTqqFO59bb61HGUsOo",
    authDomain: "address-list-c4b79.firebaseapp.com",
    databaseURL: "https://address-list-c4b79.firebaseio.com",
    projectId: "address-list-c4b79",
    storageBucket: "",
    messagingSenderId: "36880529210"
};
firebase.initializeApp(config);
let database = firebase.database();

/*
 * action types
 */

export const ACTION_TYPES = {
    ADD_NEW_ADDRESS: 'ADD_NEW_ADDRESS',
    FETCH_ADDRESS: 'FETCH_ADDRESS',
    IS_VALID: 'IS_VALID'
}

/*
 * action creators
 */
 
export function AddNewAddress(address) {
    return {
        type: ACTION_TYPES.ADD_NEW_ADDRESS,
        payload: address
    }
}

export function fetchAddress() {
    return {
        type: ACTION_TYPES.FETCH_ADDRESS,
        payload: [
            {
                _id: 1,
                StreetName: '72 duong 7',
                Ward: 'Phuoc binh',
                District: 'Quan 9',
                City: 'HCM',
                Country: 'Viet nam'
            },
            {
                _id: 2,
                StreetName: '72 asd 7',
                Ward: 'asd binh',
                District: 'Quaasdn 9',
                City: 'asd',
                Country: 'asd nam'
            }
        ]
    }
}

export function IsValid(address){
    return {
        type: ACTION_TYPES.IS_VALID,
        payload: address
    }
}


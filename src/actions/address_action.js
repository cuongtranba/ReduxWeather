import firebase from 'firebase'
import _ from 'lodash'
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
let addresses = database.ref("/")
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
    return dispatch => addresses.push(address);
    // return {     type: ACTION_TYPES.ADD_NEW_ADDRESS,     payload: {
    // [_.uniqueId()]: address     } };
}

export function fetchAddress() {
    return dispatch => {
        addresses.on('value', snapshot => {
            dispatch({
                type: ACTION_TYPES.FETCH_ADDRESS,
                payload: snapshot.val()
            })
        })
    }
    // return {
    //     type: ACTION_TYPES.FETCH_ADDRESS,
    //     payload: [
    //         {
    //             _id: 1,
    //             StreetName: '72 duong 7',
    //             Ward: 'Phuoc binh',
    //             District: 'Quan 9',
    //             City: 'HCM',
    //             Country: 'Viet nam'
    //         }, 
    //         {
    //             _id: 2,
    //             StreetName: '72 asd 7',
    //             Ward: 'asd binh',
    //             District: 'Quaasdn 9',
    //             City: 'asd',
    //             Country: 'asd nam'
    //         }
    //     ]
    // }
}

export function IsValid(address) {
    return {type: ACTION_TYPES.IS_VALID, payload: address}
}

import {EMPLOYEE_UPDATE, EMPLOYEE_CREATED, EMPLOYEES_FETCH_SUCCESS} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({props, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
    firebase.database.ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift})
    .then(()=> {
        dispatch({type: EMPLOYEE_CREATED})
        Actions.employeeList({type: 'reset'})
    });
    }
};

export const employeesFetch = () => {

    const { currentUser } = firebase.auth(); 

    return (dispatch) => {
        firebase.database.ref(`/user/${currentUser.uid}/employees`)
        .on('value',snapshot => {
            dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
        })
    } 
};


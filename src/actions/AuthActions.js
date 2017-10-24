import { EMAIL_CHANGED, 
    PASS_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER
     } from './types'
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text      
    };
};

export const passChanged = text => {
    return {
        type: PASS_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, pass}) => {
    return (dispatch) => {
    dispatch({type: LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email,pass)
    .then(user => {loginUserSucces(dispatch,user)})
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(user => loginUserSucces(dispatch,user))
        .catch(()=> loginUserFailed(dispatch));
    });
    };
};

const loginUserSucces = (dispatch,user) => {
    dispatch({type: LOGIN_USER_SUCCESS,payload: user});
    //console.log(Actions.main);
    Actions.main();
}

const loginUserFailed = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
}

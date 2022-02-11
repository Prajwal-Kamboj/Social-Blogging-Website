export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_RESULT = 'AUTHENTICATE_RESULT';
export const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR';
export const AUTHENTICATE_RETRY = 'AUTHENTICATE_RETRY';

import api from "./api";

import {toast} from "react-toastify";


export const  authenticateCode = (data) => async dispatch => {
    try {

        dispatch({ type: AUTHENTICATE })
        const response = await api.authenticator.authenticateCode(data);
        const result = await response.json();
        // console.log(result)

        if (response.status === 200) {
            dispatch({type: AUTHENTICATE_RESULT, data: result});
        } else {
            toast(result.message);
            dispatch({type: AUTHENTICATE_ERROR, error: true, data: result, status: response.status});
        }
    } catch (e) {
        toast(e.message);
        dispatch({type: AUTHENTICATE_RETRY, retry: true, message: e.message});
    }
};


// try {
//     dispatch({ type: UPDATE_USER_PROFILE })
//     const res = await api.accounts.patchUser(data)
//     const result = await res.json()
//     if (res.status === 200) {
//       dispatch({ type: UPDATE_USER_PROFILE_RESULT, data: result })
//     } else {
//       dispatch({ type: UPDATE_USER_PROFILE_ERROR, message: result })
//     }
//   } catch (e) {
//     dispatch({ type: UPDATE_USER_PROFILE_RETRY, message: e.message })
//   }
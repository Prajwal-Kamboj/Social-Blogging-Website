export const UPDATED_BIRTHDAY = 'UPDATED_BIRTHDAY';
export const UPDATED_BIRTHDAY_RESULT = 'UPDATED_BIRTHDAY_RESULT';
export const UPDATED_BIRTHDAY_ERROR = 'UPDATED_BIRTHDAY_ERROR';
export const UPDATED_BIRTHDAY_RETRY = 'UPDATED_BIRTHDAY_RETRY';

import api from "../api";

import {toast} from "react-toastify";


export const updateBirthday = (data) => async dispatch => {
    try {
        dispatch({type: UPDATED_BIRTHDAY});
        const response = await api.security.addBirthday(data);
        const result = await response.json()
        if (response.status === 200) {
            dispatch({type: UPDATED_BIRTHDAY_RESULT, data: result});
        } else {
            toast(result.message || result.error);
            dispatch({
                type: UPDATED_BIRTHDAY_ERROR, error: true, data: result, status: response.status
            });
        }
    } catch (e) {
        toast(e.message);
        dispatch({type: UPDATED_BIRTHDAY_RETRY, retry: true, message: e.message});
    }
};
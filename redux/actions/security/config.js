export const FETCH_APP_CONFIG = 'FETCH_APP_CONFIG';
export const FETCH_APP_CONFIG_RESULT = 'FETCH_APP_CONFIG_RESULT';
export const FETCH_APP_CONFIG_ERROR = 'FETCH_APP_CONFIG_ERROR';
export const FETCH_APP_CONFIG_RETRY = 'FETCH_APP_CONFIG_RETRY';


import api from "../api";

import {toast} from "react-toastify";


export const fetchAppConfig = (data) => async dispatch => {
    try {
        dispatch({type : FETCH_APP_CONFIG})
        const response = await api.security.getAppConfig(data);
        const result = await response.json();

        if (response.status === 200) {
            dispatch({type: FETCH_APP_CONFIG_RESULT, data: result});
        } else {
            toast(result.message || result.error);
            dispatch({
                type: FETCH_APP_CONFIG_ERROR, error: true, data: result, status: response.status
            });
        }
    } catch (e) {
        toast(e.message);
        dispatch({type: FETCH_APP_CONFIG_RETRY, retry: true, message: e.message});
    }
};
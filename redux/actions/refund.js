export const CREATE_REFUND = 'CREATE_REFUND';
export const CREATE_REFUND_RESULT = 'CREATE_REFUND_RESULT';
export const CREATE_REFUND_ERROR = 'CREATE_REFUND_ERROR';
export const CREATE_REFUND_RETRY = 'CREATE_REFUND_RETRY';

import api from "./api";

import {toast} from "react-toastify";


export const createRefund = (data) => async dispatch => {
    try {
        dispatch({type: CREATE_REFUND});
        const response = await api.refund.refundRequest(data);
        const result = response.json();

        if (response.status === 200) {
            dispatch({type: CREATE_REFUND_RESULT, data: result});
        } else {
            toast(result.message);
            dispatch({type: CREATE_REFUND_ERROR, error: true, data: result, status: response.status});
        }
    } catch (e) {
        toast(e.message);
        dispatch({type: CREATE_REFUND_RETRY, retry: true, message: e.message});
    }
};

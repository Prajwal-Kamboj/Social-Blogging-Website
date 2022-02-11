import {
    CREATE_REFUND,
    CREATE_REFUND_RESULT,
    CREATE_REFUND_ERROR,
    CREATE_REFUND_RETRY,
} from '../actions/refund';


const initialState = {
    data: {},
    isCreating: false,
    error: false,
    message: null,
    retry: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_REFUND:
            return {...state, isCreating: true, error: false, message: null, retry: false};
        case CREATE_REFUND_RESULT:
            return {...state, isCreating: false, data: action.data};
        case CREATE_REFUND_ERROR:
            return {...state, isCreating: false, error: true, message: action.message};
        case CREATE_REFUND_RETRY:
            return {...state, isCreating: false, retry: true, message: action.message};
        default:
            return {...state};
    }

};

export default reducer;

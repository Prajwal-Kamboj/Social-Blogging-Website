import {
    AUTHENTICATE,
    AUTHENTICATE_RESULT,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_RETRY
} from '../actions/authenticator';


const initialState = {
    data: {},
    isCreating: false,
    error: false,
    message: null,
    retry: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case AUTHENTICATE:
            return {...state, isCreating: true, error: false, message: null, retry: false};
        case AUTHENTICATE_RESULT:
            return {...state, isCreating: false, data: action.data};
        case AUTHENTICATE_ERROR:
            return {...state, isCreating: false, error: true, message: action.message};
        case AUTHENTICATE_RETRY:
            return {...state, isCreating: false, retry: true, message: action.message};
        default:
            return {...state};
    }

};

export default reducer;
import {
    UPDATED_BIRTHDAY,
    UPDATED_BIRTHDAY_ERROR,
    UPDATED_BIRTHDAY_RESULT,
    UPDATED_BIRTHDAY_RETRY,
} from '../../actions/security/birthday';


const initialState = {
    data: {},
    isUpdating: false,
    error: false,
    retry: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATED_BIRTHDAY:
            return {...state, isUpdating: true, error: false, message: null, retry: false};
        case UPDATED_BIRTHDAY_RESULT:
            return {...state, isUpdating: false, data: action.data};
        case UPDATED_BIRTHDAY_ERROR:
            return {...state, isUpdating: false, error: true, message: action.message};
        case UPDATED_BIRTHDAY_RETRY:
            return {...state, isUpdating: false, retry: true, message: action.message};

        default:
            return {...state};
    }

};

export default reducer;

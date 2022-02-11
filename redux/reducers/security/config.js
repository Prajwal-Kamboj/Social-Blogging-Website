import {
    FETCH_APP_CONFIG,
    FETCH_APP_CONFIG_RESULT,
    FETCH_APP_CONFIG_ERROR,
    FETCH_APP_CONFIG_RETRY,
} from '../../actions/security/config';


const initialState = {
    data: {},
    isFetching: false,
    error: false,
    retry: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_APP_CONFIG:
            return {...state, isFetching: true, error: false, message: null, retry: false};
        case FETCH_APP_CONFIG_RESULT:
            return {...state, isFetching: false, data: action.data};
        case FETCH_APP_CONFIG_ERROR:
            return {...state, isFetching: false, error: true, message: action.message};
        case FETCH_APP_CONFIG_RETRY:
            return {...state, isFetching: false, retry: true, message: action.message};

        default:
            return {...state};
    }

};

export default reducer;

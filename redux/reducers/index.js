// External Imports
import {combineReducers} from 'redux';
// My Imports

import refund from './refund';
import security from './security';
import authenticator from './authenticator';

const reducers =  combineReducers({
    refund,
    security,
    authenticator
});


export default reducers;

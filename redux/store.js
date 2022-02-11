/* global process */
// External Imports
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk'; // allows us to dispatch asynchronous actions.
import {createWrapper} from "next-redux-wrapper"

import NextReduxLogger from "next-redux-logger";
// My Imports
import allReducers from './reducers';
// import rootSaga from './sagas';


const middleware_list = [];

// const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, NextReduxLogger]

// logger
const makeStore = () => createStore(allReducers, compose(applyMiddleware(...middleware)))


export const wrapper = createWrapper(makeStore)
// sagaMiddleware.run(rootSaga);


// export const wrapper = createWrapper(store)

// export default store;

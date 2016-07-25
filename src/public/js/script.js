/**
 * This sript will is the entry point for the app in the browser
 */
import ReactApp from "../components/ReactApp";
import React from "react";
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { combineReducers,createStore } from 'redux';
import AppReducer from "../reducers/StoreAndReducers"
let store = createStore(AppReducer,window.__INITIAL_STATE__);


render(
    <Provider store={store}><ReactApp/></Provider>,
    document.getElementById('app')
);